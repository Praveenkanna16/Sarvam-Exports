// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`hero-container ${isRevealed ? 'revealed' : ''}`}>
      <div className="fabric-panel left-panel"></div>
      <div className="fabric-panel right-panel"></div>

      <div className="hero-text-content">
        <h1>Artistry in Every Thread</h1>
        <p>Discover the finest home textiles, crafted with passion.</p>
        <div className='hero-btns'>
          <Link to='/products' className='btn btn--primary'>
            Explore Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;