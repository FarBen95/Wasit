const express = require('express');

const router = express.Router();


const userController = require('../controllers/userController');

router.post('/', userController.createUser);

router.get('/:userId', (req, res) => {
  // TODO: get user by id
});

router.put('/:userId', (req, res) => {
  // TODO: update user details by id
});

router.delete('/:userId', (req, res) => {
  // TODO: delete user by id
});

module.exports = router;
