
// imports
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

// calls to /api/users/
router.route('/');

router.get('/', userController.list_users);
router.post('/', userController.create_user);

router.get('/:id', userController.find_user);

router.put('/:id', userController.update_user);

router.delete('/:id', userController.delete_user);

// exports
module.exports = router;