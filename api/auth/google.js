const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const User = require('../models/user');
const config = require('../config/social');

passport.use(new GoogleStrategy({
  clientID: config.google.clientID,
  clientSecret: config.google.clientSecret,
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ 'google.id': profile.id }).exec().then((user, err) => {
    if (err) {
      return done(null, false);
    }
    if (user) {
      return done(null, user);
    }
    new User({
      name: profile.displayName,
      email: profile.email,
      google: {
        id: profile.id,
      },
    }).save().then((doc) => {
      console.log(user);
      return done(null, doc);
    }).catch((error) => {
      console.log(error);
    });
    return done(null, false);
  });
}));
