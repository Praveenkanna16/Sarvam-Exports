// src/pages/AboutPage.jsx
import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About Sarvam Exports</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>Our Commitment to Quality and Craftsmanship</h2>
            <p>
              Founded on the principles of quality, integrity, and innovation, Sarvam Exports has grown to become a trusted name in the global home textile industry. We specialize in designing, manufacturing, and exporting a wide range of premium home textiles, including luxurious bed linens, plush bath towels, and elegant table linens.
            </p>
            <p>
              Our state-of-the-art manufacturing facilities combine modern technology with traditional craftsmanship to produce textiles that are not only beautiful but also durable. We are committed to sustainable practices and responsible sourcing of materials, ensuring that our products are both eco-friendly and of the highest standard.
            </p>
          </div>
          <div className="about-image">
            {/* Replace with an image of your factory or team */}
            <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2868&auto=format&fit=crop" alt="Textile Manufacturing" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;