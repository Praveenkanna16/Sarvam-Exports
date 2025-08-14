// routes/productRoutes.js
const express = require('express');
const { 
  getAllProducts, 
  createProduct, 
  getAdminProducts, 
  deleteProduct, 
  getAdminProductById, 
  updateProduct 
} = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const router = express.Router();

// Public route
router.get('/', getAllProducts);

// Admin routes
router.post('/', protect, upload.array('images', 5), createProduct);
router.get('/admin', protect, getAdminProducts);
router.get('/admin/:id', protect, getAdminProductById);
router.put('/:id', protect, upload.none(), updateProduct); // .none() as this setup doesn't handle image updates
router.delete('/:id', protect, deleteProduct);

module.exports = router;