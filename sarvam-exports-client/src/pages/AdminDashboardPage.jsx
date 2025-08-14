// src/pages/AdminDashboardPage.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInquiries, setInquiriesLoading } from '../store/inquirySlice';
import api from '../services/api';
import './AdminDashboardPage.css';

const AdminDashboardPage = () => {
  const dispatch = useDispatch();
  const { inquiries, loading } = useSelector((state) => state.inquiries);

  useEffect(() => {
    const fetchInquiries = async () => {
      dispatch(setInquiriesLoading(true));
      try {
        // This is a protected route, but our api service now adds the token!
        const response = await api.get('/inquiries');
        dispatch(setInquiries(response.data));
      } catch (error) {
        console.error("Failed to fetch inquiries:", error);
      } finally {
        dispatch(setInquiriesLoading(false));
      }
    };
    fetchInquiries();
  }, [dispatch]);

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Customer Inquiries</h1>
      {loading ? (
        <p>Loading inquiries...</p>
      ) : (
        <div className="inquiries-table-container">
          <table className="inquiries-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Product</th>
                <th>Client Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length > 0 ? (
                inquiries.map((inquiry) => (
                  <tr key={inquiry._id}>
                    <td>{new Date(inquiry.createdAt).toLocaleDateString()}</td>
                    <td>{inquiry.product ? inquiry.product.name : 'N/A'}</td>
                    <td>{inquiry.clientName}</td>
                    <td>{inquiry.clientEmail}</td>
                    <td>{inquiry.message}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No inquiries found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardPage;