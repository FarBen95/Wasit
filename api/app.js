/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

const port = process.env.PORT || 5000;

const postsRoute = require('./routes/posts');

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Wasit server v1',
  });
});

app.use('/posts', postsRoute);

app.listen(port, () => {
  console.log(`Wasit Server running on port ${port}`);
});
