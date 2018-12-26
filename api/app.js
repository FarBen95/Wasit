require('dotenv').config();
const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const morgan = require('morgan');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${
    process.env.DB_PASS
  }@cluster0-5pblm.mongodb.net/test?retryWrites=true`,
  { autoIndex: false, useNewUrlParser: true },
);

const port = process.env.PORT || 5000;

const publicationRoute = require('./routes/publications');
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
require('./auth/google');
require('./auth/jwt');

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(passport.initialize());
  server.use(morgan('dev'));

  server.get('*', (req, res) => handle(req, res));

  server.get('/', (req, res) => {
    res.status(200).json({
      message: 'Wasit server v1',
    });
  });

  server.use('/publications', publicationRoute);
  server.use('/posts', postsRoute);
  server.use('/users', userRoute);
  server.use('/auth', authRoute);

  server.listen(port, () => {
    console.log(`Wasit Server running on port ${port}`);
  });
});
