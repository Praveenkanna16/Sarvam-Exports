// src/components/InquiryForm.jsx
import React, { useState } from 'react'; // <-- This is the corrected line
import api from '../services/api';
import './InquiryForm.css';

const InquiryForm = ({ productId }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    companyName: '',
    quantity: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      await api.post('/inquiries', {
        ...formData,
        product: productId,
      });
      setSuccess(true);
      // Clear form on success
      setFormData({
        clientName: '',
        clientEmail: '',
        companyName: '',
        quantity: '',
        message: '',
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    }
  };

  if (success) {
    return (
      <div className="inquiry-success">
        <h3>Thank You!</h3>
        <p>Your inquiry has been sent successfully. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="inquiry-form">
      {error && <p className="error-message">{error}</p>}
      <div className="form-group">
        <input
          type="text"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          placeholder="Your Full Name"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="clientEmail"
          value={formData.clientEmail}
          onChange={handleChange}
          placeholder="Your Email Address"
          required
        />
      </div>
       <div className="form-group">
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company Name (Optional)"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Estimated Quantity (e.g., 500 units)"
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message or Specific Requirements"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit">Send Inquiry</button>
    </form>
  );
};

export default InquiryForm;