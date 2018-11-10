/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Handling GET requests for posts',
  });
});

router.post('/', (req, res) => {
  res.status(201).json({
    message: 'Handling POST requests for posts',
  });
});

router.get('/:postId', (req, res) => {
  res.status(200).json({
    message: 'Handling GET post by id requests',
  });
});

module.exports = router;
