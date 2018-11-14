/* eslint-disable linebreak-style */
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Publication = require('../models/publication');

router.get('/', (req, res) => {
  Publication.find().exec().then((docs) => {
    console.log(docs);
    res.status(200).json(docs);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  const publication = new Publication({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
    ownerId: new mongoose.Types.ObjectId(),
  });
  publication.save().then((result) => {
    console.log(result);
    res.status(201).json({
      message: 'publication successfully created',
      publication,
    });
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:publicationId', (req, res) => {
  const id = req.params.publicationId;
  Publication.findById(id).exec().then((doc) => {
    console.log(doc);
    res.status(200).json(doc);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:publicationId', (req, res) => {
  // handling put requests to publications
});

router.delete('/:publicationId', (req, res) => {
  const id = req.params.publicationId;
  Publication.remove({ _id: id }).exec().then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
