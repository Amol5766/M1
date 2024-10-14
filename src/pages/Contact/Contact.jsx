import React, { useState } from 'react';
import './Contact.css';
import ModelWrapper from '../../components/Model/Model';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted!');
  };

  return (
    <div className="contact-container">
      {/* Contact Information Section */}
      <div className="contact-info">
        <h2>Connect With Us</h2>
        <p>Phone: +91 8088038393</p>
        <p>Email: freshandmore@gmail.com</p>
        <p>Address: Fish Curry Rice, Kushalnagar, Karnataka 571234</p>
      </div>

      {/* 3D Model Section */}
      <div className="model-container">
        <ModelWrapper />
      </div>

      {/* Contact Form Section */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      {/* Google Maps Section */}
      <div className="map-container">
        <iframe
          title="Google Maps"
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d974.0054758718923!2d75.94105116242059!3d12.44826147877576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5099ff8ad426f%3A0x1932fa9501315016!2sFresh%20%26%20More!5e0!3m2!1sen!2sin!4v1728814438890!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
