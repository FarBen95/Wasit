const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { check, validationResult } = require('express-validator/check');

const router = express.Router();

router.get('/google', passport.authenticate('google', {
  session: false,
  scope: ['profile', 'email'],
}));

router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  jwt.sign({ userId: req.user.id }, 'secretkey', { expiresIn: '5 min' }, (err, token) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json({ token });
    }
  });
});

router.get('/facebook', (req, res) => {
  res.status(200).json({
    message: 'facebook oauth',
  });
});

router.get('/twitter', (req, res) => {
  res.status(200).json({
    message: 'twitter oauth',
  });
});

module.exports = router;
