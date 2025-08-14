// routes/inquiryRoutes.js
const express = require('express');
const { createInquiry, getAllInquiries } = require('../controllers/inquiryController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Public route for anyone to submit an inquiry
router.post('/', createInquiry);

// Protected route for admins to view all inquiries
router.get('/', protect, getAllInquiries);

module.exports = router;