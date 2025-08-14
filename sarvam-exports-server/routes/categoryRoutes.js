// routes/categoryRoutes.js
const express = require('express');
const { createCategory, getAllCategories } = require('../controllers/categoryController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Protected route for admin to create a category
router.post('/', protect, createCategory);

// Public route to get all categories
router.get('/', getAllCategories);

module.exports = router;