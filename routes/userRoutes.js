const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);

// Add more routes for login, profile, etc.

module.exports = router;
