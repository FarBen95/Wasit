const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

const User = require('../models/user');

router.post('/', (req, res) => {
  User.findOne({ email: req.body.email }).exec().then((result) => {
    if (!result) {
      return res.status(401).json({
        message: 'Authentication failed',
      });
    }
    if (result.comparePassword(req.body.password)) {
      return res.status(200).json({
        message: 'Authentication succeded',
      });
    }
    return res.status(401).json({
      message: 'Authentication failed',
    });
  }).catch(err => res.status(500).json(err));
});

router.get('/google', passport.authenticate('google', {
  session: false,
  scope: ['profile', 'email'],
}));

router.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
  // TODO: signing token and returning to user
});

router.get('/facebook', (req, res) => {
  // TODO: facebook authentication to be implemented here
});

router.get('/twitter', (req, res) => {
  // Twitter authentication to be implemented here
});

module.exports = router;
