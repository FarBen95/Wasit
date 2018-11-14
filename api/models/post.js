/* eslint-disable linebreak-style */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  authorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  contentFormat: { type: String, required: true },
  content: { type: String, require: true },
  tags: [{ type: String }],
  status: { type: String, default: 'draft' },
  createdAt: { type: Date, default: Date.now },
  publishedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
