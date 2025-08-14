// src/components/CommitmentSection.jsx
import React from 'react';
import './CommitmentSection.css';

const CommitmentSection = () => {
  return (
    <div className="commitment-section">
      <h2 className="section-title">Our Commitment</h2>
      <div className="commitment-grid">
        <div className="commitment-card">
          <div className="commitment-icon">❖</div>
          <h3>Premium Quality</h3>
          <p>We use only the finest raw materials, ensuring every product meets the highest standards of quality and durability.</p>
        </div>
        <div className="commitment-card">
          <div className="commitment-icon">❖</div>
          <h3>Expert Craftsmanship</h3>
          <p>Our skilled artisans combine traditional techniques with modern technology to create textiles of exceptional beauty.</p>
        </div>
        <div className="commitment-card">
          <div className="commitment-icon">❖</div>
          <h3>Global Reach</h3>
          <p>With a reliable supply chain, we deliver our exquisite textile collections to business partners all around the world.</p>
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;