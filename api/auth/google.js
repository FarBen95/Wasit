const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const User = require('../models/user');

passport.use(new GoogleStrategy({
  clientID: '364325419820-jiu1qmv53kq8loc09m8cc5ssimsna94t.apps.googleusercontent.com',
  clientSecret: 'bCYQBuGwuTv3mfvViD4Pm5Kw',
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ 'google.id': profile.id }).exec().then((user) => {
  	if (user) {
  		console.log(user);
  		return done(null, user);
  	}
  	new User({
      	name: profile.displayName,
      email: profile.email,
      google: {
        id: profile.id,
      },
  		}).save().then((user) => {
  			console.log(user);
  			return done(null, user);
  		}).catch((err) => {
  			console.log(err);
  		});
  });
}));
