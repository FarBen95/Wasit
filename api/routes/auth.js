const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

const User = require('../models/user');

router.get('/google', passport.authenticate('google', {
  session: false,
  scope: ['profile', 'email'],
}));

router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  // TODO: JWT signature and returning token to user
  const token = jwt.sign(req.user.id, 'secret');
  res.status(200).json({
    token,
  });
});

router.get('/facebook', (req, res) => {
  // TODO: facebook authentication to be implemented here
});

router.get('/twitter', (req, res) => {
  // Twitter authentication to be implemented here
});

module.exports = router;
