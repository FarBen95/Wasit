/* eslint-disable linebreak-style */
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Handling GET requests for publications',
  });
});

router.post('/', (req, res) => {
  res.status(201).json({
    message: 'Handling POST requests for publications',
  });
});

router.get('/:publicationId', (req, res) => {
  res.status(200).json({
    message: 'Handling GET publication by id requests',
  });
});

router.put('/:publicationId', (req, res) => {
  res.status(200).json({
    message: 'Handling GET publication by id requests',
  });
});

router.delete('/:publicationId', (req, res) => {
  res.status(200).json({
    message: 'Handling GET publication by id requests',
  });
});

module.exports = router;
