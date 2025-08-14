// src/pages/AdminProductFormPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import './AdminProductFormPage.css';

const AdminProductFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    specifications: '{}',
  });
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await api.get('/categories');
      setCategories(data);
    };

    const fetchProduct = async () => {
      const { data } = await api.get(`/products/admin/${id}`);
      setFormData({
        name: data.name,
        description: data.description,
        category: data.category._id,
        specifications: JSON.stringify(data.specifications || '{}', null, 2), // Format JSON nicely
      });
    };

    fetchCategories();
    if (isEditMode) {
      fetchProduct();
    }
  }, [id, isEditMode]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleImageChange = (e) => setImages(e.target.files);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('category', formData.category);
    data.append('specifications', formData.specifications);
    
    if (!isEditMode && images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        data.append('images', images[i]);
      }
    }
    
    try {
      // THIS IS THE FIX: Explicitly set the header for file uploads
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };

      if (isEditMode) {
        await api.put(`/products/${id}`, data, config);
      } else {
        await api.post('/products', data, config);
      }
      navigate('/admin/products');
    } catch (error) {
      console.error('Failed to save product', error);
      alert('Failed to save product. Check console for details.');
    }
  };

  return (
    <div className="admin-form-page">
      <h1>{isEditMode ? 'Edit Product' : 'Create New Product'}</h1>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label>Product Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="5" required></textarea>
        </div>
        <div className="form-group">
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select a Category</option>
            {categories.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label>Specifications (JSON format)</label>
          <textarea name="specifications" value={formData.specifications} onChange={handleChange} rows="5"></textarea>
        </div>
        {!isEditMode && (
          <div className="form-group">
            <label>Images (required for new products)</label>
            <input type="file" name="images" onChange={handleImageChange} multiple required />
          </div>
        )}
        <button type="submit" className="btn-submit">{isEditMode ? 'Update Product' : 'Create Product'}</button>
      </form>
    </div>
  );
};

export default AdminProductFormPage;