// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} SARVAM EXPORTS. All Rights Reserved.
        </p>
        <p className="footer-text">
          High-Quality Home Textiles for the Global Market.
        </p>
      </div>
    </footer>
  );
};

export default Footer;