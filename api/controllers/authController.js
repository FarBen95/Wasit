const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.auth = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      res.status(401).json({
        message: 'Authentication failed',
      });
    } else if (user.comparePassword(req.body.password)) {
      const token = jwt.sign(user.id, 'secret');
      res.status(200).json({
        message: 'Authentication succeded',
        token,
      });
    } else {
      res.status(401).json({
        message: 'Authentication failed',
      });
    }
  });
};

exports.GoogleAuth = (req, res) => {

};

exports.FacebookAuth = (req, res) => {

};

exports.TwitterAuth = (req, res) => {

};
