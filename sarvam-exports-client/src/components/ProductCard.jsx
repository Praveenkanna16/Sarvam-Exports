// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    // The card itself is no longer a link, the button inside is.
    <div className="product-card">
      <div className="product-card-image-wrapper">
        <img src={product.images[0]} alt={product.name} className="product-card-image" />
      </div>
      <div className="product-card-content">
        <p className="product-card-category">{product.category.name}</p>
        <h3 className="product-card-name">{product.name}</h3>
        <Link to={`/products/${product._id}`} className="view-details-link">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;