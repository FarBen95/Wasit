const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  facebook: { id: String, _json: String },
  google: { id: String, _json: String },
  twitter: { id: String, _json: String },
  bio: { type: String },
  createdAt: { type: Date, default: Date.now },
});

userSchema.statics.generateHash = password => bcrypt.hashSync(password, 10);
userSchema.statics.compareHash = password => bcrypt.compareSync(password, this.password);

module.exports = mongoose.model('User', userSchema);
