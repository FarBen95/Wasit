const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

router.post('/', authController.auth);

router.get('/google', authController.GoogleAuth);

router.get('/facebook', authController.FacebookAuth);

router.get('/twitter', authController.TwitterAuth);

module.exports = router;
