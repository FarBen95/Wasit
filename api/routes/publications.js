const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const publicationController = require('../controllers/publicationController');

router.get('/', publicationController.getPublications);

router.post('/', publicationController.createPublication);

router.get('/:id', publicationController.getPublicationById);

router.put('/:id', publicationController.updatePublicationById);

router.delete('/:id', publicationController.deletePublicationById);

module.exports = router;
