const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salt: { type: String },
  imageUrl: { type: String },
  bio: { type: String },
  createdAt: { type: Date, default: Date.now },
});

userSchema.statics.generateHash = password => bcrypt.hashSync(password, 10);
userSchema.statics.compareHash = password => bcrypt.compareSync(password, this.password);

module.exports = mongoose.model('User', userSchema);
