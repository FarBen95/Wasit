const Post = require('../models/post');

exports.getPosts = (req, res) => {
  Post.find().exec().then((posts) => {
    res.status(200).json(posts);
  }).catch((err) => {
    res.status(500).json(err);
  });
};

exports.createPost = (req, res) => {
  // requires authentication
  const post = new Post({
    title: req.body.title,
    contentFormat: req.body.contentFormat,
    content: req.body.content,
    tags: req.body.tags,
  });

  post.save().then((result) => {
    res.status(201).json({
      message: 'post created successfuly',
      postCreated: result,
    });
  }).catch(err => res.status(500).json(err));
};

exports.updatePostById = (req, res) => {
  // TODO: implementing the update post controller
  // requires auhtentication and authorization
};

exports.getPostById = (req, res) => {
  const { id } = req.params;
  Post.findById(id).exec().then((doc) => {
    res.status(200).json(doc);
  }).catch((err) => {
    res.status(500).json(err);
  });
};

exports.deletePostById = (req, res) => {
  // requires authentication and authorization
  const id = req.params.postId;
  Post.remove({ id }).exec().then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    res.status(500).json(err);
  });
};
