// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your components and pages
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage'; // <-- This was the line with the typo
import ContactPage from './pages/ContactPage';
import AdminLayout from './components/AdminLayout';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminPrivateRoute from './components/AdminPrivateRoute';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminProductsPage from './pages/AdminProductsPage';
import AdminProductFormPage from './pages/AdminProductFormPage';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [revealing, setRevealing] = useState(false);

  useEffect(() => {
    // Total animation is now faster: ~1.8s (stitch) + ~1s (logo) = ~2.8s
    
    // 1. Trigger the fade-out of the preloader
    const revealTimer = setTimeout(() => {
      setRevealing(true);
    }, 3000); // Wait 3 seconds

    // 2. Remove the preloader from the DOM after the fade-out is done
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 3700); // 3s wait + 0.7s fade-out

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <>
      {loading && <Preloader isRevealing={revealing} />}
      
      <div className={`app-container ${loading ? '' : 'visible'}`}>
        <Router>
          <Navbar />
          <main>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLoginPage />} />
              <Route element={<AdminPrivateRoute />}>
                <Route element={<AdminLayout />}>
                  <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
                  <Route path="/admin/products" element={<AdminProductsPage />} />
                  <Route path="/admin/products/new" element={<AdminProductFormPage />} />
                  <Route path="/admin/products/edit/:id" element={<AdminProductFormPage />} />
                </Route>
              </Route>
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
