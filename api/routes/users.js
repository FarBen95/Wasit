/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Handling GET requests for users',
  });
});

router.post('/', (req, res) => {
  res.status(201).json({
    message: 'Handling POST requests for users',
  });
});

router.get('/:userId', (req, res) => {
  res.status(200).json({
    message: 'Handling GET user by id requests',
  });
});

router.put('/:userId', (req, res) => {
  res.status(200).json({
    message: 'Handling GET user by id requests',
  });
});

router.delete('/:userId', (req, res) => {
  res.status(200).json({
    message: 'Handling GET user by id requests',
  });
});

module.exports = router;
