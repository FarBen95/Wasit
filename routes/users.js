const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const User = require('../models/user');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Handling GET requests for users',
  });
});

router.post('/signup', (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  user.save().then((result) => {
    console.log(result);
    res.status(201).json({
      message: 'User created successfuly',
      user,
    });
  }).catch((err) => {
    console.log(err);
    req.status(500).json(err);
  });
});

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }).exec().then((result) => {
    if (!result) {
      res.status(401).json({
        message: 'Authentication failed',
      });
    } else {
      res.status(200).json({
        message: 'Successful authentication',
      });
    }
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
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
