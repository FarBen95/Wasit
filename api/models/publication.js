/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const publicationSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  ownerId: { type: Schema.Types.ObjectId, ref: 'User', require: true },
  createdAt: { type: Date, default: Date.now },
  editors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  writers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Publication', publicationSchema);
