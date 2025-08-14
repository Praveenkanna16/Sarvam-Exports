const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  image: { type: String }, // URL from Cloudinary
}, { timestamps: true });

module.exports = mongoose.model('Category', CategorySchema);