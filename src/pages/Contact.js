import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log(formData);
    // Show success message
    setSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    // Reset submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      <section className="section contact-hero">
        <div className="container">
          <h1 className="section-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Have a question, a project idea, or just want to say hello? Feel free to reach out!
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container contact-container">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Feel free to contact me through any of these channels. I typically respond within 24 hours.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">📧</div>
                <div className="contact-item-content">
                  <h3>Email</h3>
                  <p><a href="mailto:hello@example.com">hello@example.com</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">📱</div>
                <div className="contact-item-content">
                  <h3>Phone</h3>
                  <p><a href="tel:+1234567890">(123) 456-7890</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div className="contact-item-content">
                  <h3>Location</h3>
                  <p>New York, NY, United States</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Find me on</h3>
              <div className="social-icons">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Send Me a Message</h2>
            {submitted ? (
              <div className="success-message">
                <p>Thank you for your message! I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 