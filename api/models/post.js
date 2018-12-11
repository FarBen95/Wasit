const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  publicationId: {
    type: Schema.Types.ObjectId,
    ref: 'Publication',
  },
  title: {
    type: String,
    required: true,
  },
  contentFormat: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    require: true,
  },
  comments: [{
    authorId: { type: Schema.Types.ObjectId, ref: 'User', require: true },
    content: { type: String },
    createdAt: { type: Date, default: Date.now },
  }],
  tags: [{ type: String }],
  status: {
    type: String,
    default: 'draft',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', postSchema);
