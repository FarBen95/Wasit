/* eslint-disable linebreak-style */
const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Post = require('../models/post');

router.get('/', (req, res) => {
  Post.find().exec().then((docs) => {
    console.log(docs);
    res.status(200).json(docs);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  const post = new Post({
    _id: new mongoose.Types.ObjectId(),
    authorId: new mongoose.Types.ObjectId(),
    title: req.body.title,
    contentFormat: req.body.contentFormat,
    content: req.body.content,
    tags: req.body.tags,
  });

  post.save().then((result) => {
    console.log(result);
    res.status(201).json({
      message: 'Handling POST requests for posts',
      postCreated: post,
    });
  }).catch(err => console.log(err));
});

router.get('/:postId', (req, res) => {
  const id = req.params.postId;
  Post.findById(id).exec().then((doc) => {
    console.log(doc);
    res.status(200).json(doc);
  }).catch((err) => {
    console.log(err);
  });
});

router.put('/:postId', (req, res) => {
  res.status(200).json({
    message: 'Handling GET post by id requests',
  });
});

router.delete('/:postId', (req, res) => {
  const id = req.params.postId;
  Post.remove({ _id: id }).exec().then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
