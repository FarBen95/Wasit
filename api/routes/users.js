const express = require('express');
const passport = require('passport');

const router = express.Router();


const userController = require('../controllers/userController');

router.post('/', userController.createUser);

router.get('/:id', userController.getUserById);

router.put('/:id', userController.updateUser);

router.delete('/', passport.authenticate('jwt', { session: false }), userController.deleteUser);

module.exports = router;
