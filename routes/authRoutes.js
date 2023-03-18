const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {login, register, toggleIsActive} = require('../controllers/authController');

// POST /auth/login
router.post('/login', login);

//POST /auth/register
router.post('/register', register);

//POST /auth/toggle
router.put('/toggle', toggleIsActive);

module.exports = router;
