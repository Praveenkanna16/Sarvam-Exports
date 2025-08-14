// src/components/Preloader.jsx
import React from 'react';
import './Preloader.css';

const Preloader = ({ isRevealing }) => {
  const logoText = "SARVAM EXPORTS";

  return (
    <div className={`preloader-stitch-container ${isRevealing ? 'reveal' : ''}`}>
      <div className="stitching-machine-animation">
        <div className="presser-foot"></div>
        <div className="needle"></div>
        <div className="stitch-path"></div>
      </div>
      <div className="preloader-logo-stitched">
        {logoText.split('').map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;