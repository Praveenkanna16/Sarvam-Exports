// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import api from '../services/api';
import './ContactPage.css';

const ContactPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setStep(step + 1);
  };

  const handleSubmit = async (finalMessage) => {
    const finalData = { ...formData, message: finalMessage };
    setFormData(finalData);
    
    // NOTE: This uses the product inquiry form for simplicity. 
    // In a real app, you might create a new, more general contact endpoint.
    try {
      // We'll use a placeholder product ID for general inquiries
      const DUMMY_PRODUCT_ID = "60d5ec49f0b1a0a0d0a0d0a0"; // Replace if you have a general product ID
      await api.post('/inquiries', {
        product: DUMMY_PRODUCT_ID,
        clientName: finalData.name,
        clientEmail: finalData.email,
        message: `Interest: ${finalData.interest}. Message: ${finalData.message}`
      });
      setIsComplete(true);
    } catch (error) {
      console.error("Inquiry submission failed", error);
      alert("Submission failed. Please try again later.");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <QuestionStep question="Let's start with your name." field="name" onNext={handleNext} />;
      case 2:
        return <QuestionStep question={`Nice to meet you, ${formData.name}. What's your business email?`} field="email" type="email" onNext={handleNext} />;
      case 3:
        return <InterestStep onNext={handleNext} />;
      case 4:
        return <QuestionStep question="Great! Please tell us a bit more about your requirements." field="message" type="textarea" onNext={handleSubmit} isFinalStep={true} />;
      default:
        return null;
    }
  };

  return (
    <div className="contact-page interactive">
      <div className="interactive-form-container">
        {isComplete ? (
          <div className="thank-you-message">
            <h3>Thank You, {formData.name}!</h3>
            <p>We've received your inquiry and will be in touch shortly.</p>
          </div>
        ) : (
          renderStep()
        )}
      </div>
    </div>
  );
};

// A helper component for simple text questions
const QuestionStep = ({ question, field, onNext, type = 'text', isFinalStep = false }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) onNext(value);
  };
  return (
    <form onSubmit={handleSubmit} className="form-step active">
      <label>{question}</label>
      {type === 'textarea' ? (
        <textarea value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type your answer here..." autoFocus />
      ) : (
        <input type={type} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type your answer here..." autoFocus />
      )}
      <button type="submit">{isFinalStep ? 'Send Inquiry' : 'Next →'}</button>
    </form>
  );
};

// A helper component for the interest selection step
const InterestStep = ({ onNext }) => {
  return (
    <div className="form-step active">
      <label>What are you primarily interested in?</label>
      <div className="interest-options">
        <button onClick={() => onNext('interest', 'Bed Linens')}>Bed Linens</button>
        <button onClick={() => onNext('interest', 'Bath Linens')}>Bath Linens</button>
        <button onClick={() => onNext('interest', 'Table Linens')}>Table Linens</button>
        <button onClick={() => onNext('interest', 'Other')}>Other/General Inquiry</button>
      </div>
    </div>
  );
};

export default ContactPage;