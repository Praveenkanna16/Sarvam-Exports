const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },
  companyName: { type: String },
  quantity: { type: String },
  message: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['New', 'Contacted', 'Resolved'], 
    default: 'New' 
  },
}, { timestamps: true });

module.exports = mongoose.model('Inquiry', InquirySchema);