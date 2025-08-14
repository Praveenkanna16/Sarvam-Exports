// src/pages/ProductDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import './ProductDetailPage.css';
import InquiryForm from '../components/InquiryForm'; // <-- IMPORT THE NEW COMPONENT

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="loader">Loading Product Details...</div>;
  }

  if (!product) {
    return <div className="loader">Product not found.</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-grid">
        <div className="product-images">
          <img src={product.images[0]} alt={product.name} className="main-image" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-category-detail">{product.category.name}</p>
          <p className="product-description">{product.description}</p>
          
          <h3 className="spec-title">Specifications</h3>
          <ul className="spec-list">
            {Object.entries(product.specifications).map(([key, value]) => (
              <li key={key}>
                <strong>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong> {value}
              </li>
            ))}
          </ul>

          {/* --- REPLACE THE PLACEHOLDER WITH THE ACTUAL COMPONENT --- */}
          <div className="inquiry-form-container">
            <h3>Request a Quote</h3>
            <InquiryForm productId={product._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;