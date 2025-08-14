// src/components/AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNav from './AdminNav';
import './AdminLayout.css';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminNav />
      <div className="admin-content">
        <Outlet /> {/* This is where the specific admin page will be rendered */}
      </div>
    </div>
  );
};

export default AdminLayout;