
const { check, validationResult } = require('express-validator/check');

const User = require('../models/user');

exports.createUser = [check('email').isEmail(), check('password').isLength({ min: 8 }), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
  } else {
    User.create({
      name: req.body.name,
      userName: req.body.username,
      email: req.body.email,
      password: req.body.password,
    }).then(user => res.json(user));
  }
}];
