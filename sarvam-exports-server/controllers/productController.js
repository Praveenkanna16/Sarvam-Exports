// controllers/productController.js
const Product = require('../models/Product');
const cloudinary = require('../config/cloudinary');

// @desc    Fetch all public products
// @route   GET /api/products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ isPublic: true }).populate('category', 'name').sort({ createdAt: -1 });
    res.json(products);
  } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};

// @desc    Get all products for admin
// @route   GET /api/products/admin
exports.getAdminProducts = async (req, res) => {
  try {
    const products = await Product.find({}).populate('category', 'name').sort({ createdAt: -1 });
    res.json(products);
  } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};

// @desc    Get a single product for admin edit
// @route   GET /api/products/admin/:id
exports.getAdminProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category', 'name');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};

// @desc    Create a new product
// @route   POST /api/products
exports.createProduct = async (req, res) => {
  const { name, description, category, specifications } = req.body;
  try {
    const imageUploadPromises = req.files.map(file => {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({ folder: "sarvam_exports" }, (error, result) => {
          if (error) return reject(error);
          resolve(result.secure_url);
        });
        uploadStream.end(file.buffer);
      });
    });
    const imageUrls = await Promise.all(imageUploadPromises);
    const newProduct = new Product({
      name, description, category,
      specifications: JSON.parse(specifications),
      images: imageUrls,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) { res.status(500).json({ message: 'Server error while creating product' }); }
};

// @desc    Update a product
// @route   PUT /api/products/:id
exports.updateProduct = async (req, res) => {
  const { name, description, category, specifications } = req.body;
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    product.name = name || product.name;
    product.description = description || product.description;
    product.category = category || product.category;
    product.specifications = specifications ? JSON.parse(specifications) : product.specifications;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    await product.deleteOne();
    res.json({ message: 'Product removed successfully' });
  } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};