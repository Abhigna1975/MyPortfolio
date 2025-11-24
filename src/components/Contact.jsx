// src/components/Contact.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = ({ activeTab }) => {
  if (activeTab !== 'home') return null;
  
  // rest of your code...

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await emailjs.send(
        'service_bq7b088',
        'template_orgvmhf',
        {
          name: formData.fullName,
          email: formData.email,
          message: formData.message
        },
        'KsEG-OR0yB8jOTu94'
      );

      console.log('SUCCESS:', result);
      setIsSubmitted(true);
      setFormData({ fullName: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error) {
      console.error('FAILED:', error);
      setError(`Failed to send message: ${error.text || error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isSubmitted && (
        <div className="notification success-notification">
          ✅ Your message has been sent successfully!
        </div>
      )}
      
      {error && (
        <div className="notification error-notification">
          ❌ {error}
        </div>
      )}
      
      <div className="contact-wrapper">
        <div className="contact-container">
          <span className="contact-title-large">Contact</span>
          <span className="contact-title-small">Me</span>
          
          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input 
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="copyright-notice">
        © 2025 Abhigna Margam. All rights reserved.
      </div>
    </>
  );
};
};

export default Contact;