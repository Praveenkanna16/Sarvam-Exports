// src/components/FeaturedProducts.jsx
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import ProductCard from './ProductCard'; // We'll reuse the same card
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await api.get('/products');
        // We'll just feature the first 5 products for this example
        setProducts(response.data.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      }
    };
    fetchFeaturedProducts();
  }, []);

  return (
    <div className="featured-products-section">
      <h2 className="section-title">Featured Collection</h2>
      <div className="featured-products-container">
        {products.map(product => (
          <div className="featured-product-item" key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;