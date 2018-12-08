require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const morgan = require('morgan');

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-5pblm.mongodb.net/test?retryWrites=true`, { autoIndex: false, useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(morgan('dev'));

const port = process.env.PORT || 5000;

const publicationRoute = require('./routes/publications');
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
require('./auth/google');
require('./auth/jwt');

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Wasit server v1',
  });
});

app.use('/publications', publicationRoute);
app.use('/posts', postsRoute);
app.use('/users', userRoute);
app.use('/auth', authRoute);

app.listen(port, () => {
  console.log(`Wasit Server running on port ${port}`);
});
