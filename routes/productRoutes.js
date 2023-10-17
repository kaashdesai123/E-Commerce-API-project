const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);

// Add more routes for CRUD

module.exports = router;
