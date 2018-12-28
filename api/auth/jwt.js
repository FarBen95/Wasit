const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');

const User = require('../models/user');
const config = require('../../config/jwt');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secret,
  issuer: config.issuer,
  audience: config.audience,
};
passport.use(
  new Strategy(opts, (payload, done) => {
    User.findOne({ id: payload.id }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    });
  }),
);
