const jwt = require('jsonwebtoken');
const User = require('../models/user');

const config = require('../../config/jwt');

exports.auth = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (user) {
      if (user.comparePassword(req.body.password)) {
        const token = jwt.sign(user.id, config.secret);
        return res.json({
          message: 'Authentication succeded',
          token,
        });
      }
    }
    return res.json({
      message: 'Authnetication failed',
    });
  });
};

exports.GoogleAuth = (req, res) => {};

exports.FacebookAuth = (req, res) => {};

exports.TwitterAuth = (req, res) => {};
