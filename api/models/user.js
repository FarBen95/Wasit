const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  bio: { type: String },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      console.log(err);
    } else {
      this.password = hash;
      next();
    }
  });
});

userSchema.methods.comparePassword = function (password) { return bcrypt.compareSync(password, this.password); };

module.exports = mongoose.model('User', userSchema);
