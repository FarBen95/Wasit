const User = require('../models/user');

exports.auth = (req, res) => {
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
};

exports.GoogleAuth = (req, res) => {

};

exports.FacebookAuth = (req, res) => {

};

exports.TwitterAuth = (req, res) => {

};
