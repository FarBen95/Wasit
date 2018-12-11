const Publication = require('../models/publication');

exports.createPublication = (req, res) => {
  // requires authentication
  const publication = new Publication({
    name: req.body.name,
    description: req.body.description,
  });
  publication.save().then((result) => {
    res.status(201).json({
      message: 'publication successfully created',
      result,
    });
  }).catch((err) => {
    res.status(500).json(err);
  });
};

exports.getPublications = (req, res) => {
  // TODO: get all publications??!!
};

exports.getPublicationById = (req, res) => {
  const { id } = req.params;
  Publication.findById(id).exec().then((publication) => {
    res.status(200).json(publication);
  }).catch((err) => {
    res.status(500).json(err);
  });
};

exports.updatePublicationById = (req, res) => {
  // TODO: implementing publication update controller
  // requires authentication and authorization
};

exports.deletePublicationById = (req, res) => {
  // requires authentication and authorization
  const { id } = req.params;
  Publication.remove({ id }).exec().then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    res.status(500).json(err);
  });
};
