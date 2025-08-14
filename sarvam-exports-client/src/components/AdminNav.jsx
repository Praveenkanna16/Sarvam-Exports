// src/components/AdminNav.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminNav.css';

const AdminNav = () => {
  return (
    <div className="admin-nav">
      <h2 className="admin-nav-title">Admin Menu</h2>
      <ul className="admin-nav-list">
        <li>
          <NavLink to="/admin/dashboard" className="admin-nav-link">
            Inquiries
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/products" className="admin-nav-link">
            Products
          </NavLink>
        </li>
        {/* Add more links here later, e.g., for Categories */}
      </ul>
    </div>
  );
};

export default AdminNav;