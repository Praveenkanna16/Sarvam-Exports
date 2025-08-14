// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import CommitmentSection from '../components/CommitmentSection';
import FeaturedProducts from '../components/FeaturedProducts';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CommitmentSection />
      <FeaturedProducts />
    </>
  );
};

// This is the line that was missing
export default HomePage;
