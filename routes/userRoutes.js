const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {getUsers, createUser, updateUser, deleteUser} = require('../controllers/userController');

// GET /users
router.get('/', authMiddleware, getUsers);

// POST /users
router.post('/', authMiddleware, createUser);

// PUT /users/:id
router.put('/:id', authMiddleware, updateUser);

// DELETE /users/:id
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;
