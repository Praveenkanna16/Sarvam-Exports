// controllers/inquiryController.js
const Inquiry = require('../models/Inquiry');

// @desc    Create a new inquiry
// @route   POST /api/inquiries
exports.createInquiry = async (req, res) => {
  const { product, clientName, clientEmail, companyName, quantity, message } = req.body;

  try {
    const newInquiry = new Inquiry({
      product,
      clientName,
      clientEmail,
      companyName,
      quantity,
      message,
    });

    const savedInquiry = await newInquiry.save();
    res.status(201).json(savedInquiry);
  } catch (error) {
    res.status(500).json({ message: 'Server error while submitting inquiry' });
  }
};

// @desc    Get all inquiries (Admin only)
// @route   GET /api/inquiries
exports.getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find()
      .populate('product', 'name')
      .sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};