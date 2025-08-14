// src/pages/ProductsPage.jsx
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import './ProductsPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === products.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (loading) return <div className="loader">Loading Products...</div>;
  if (products.length === 0) return <div className="loader">No products found.</div>;

  return (
    <div className="products-page immersive-carousel">
      {/* This div creates the blurred background effect */}
      <div 
        className="background-image-blur" 
        style={{ backgroundImage: `url(${products[currentIndex].images[0]})` }}
      ></div>

      <div className="carousel-container">
        <button className="carousel-arrow left-arrow" onClick={goToPrevious}>❮</button>
        
        <div className="carousel-track-container">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {products.map((product) => (
              <div className="carousel-slide" key={product._id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        
        <button className="carousel-arrow right-arrow" onClick={goToNext}>❯</button>
      </div>

      <div className="carousel-dots">
        {products.map((_, index) => (
          <div 
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;