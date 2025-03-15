import React, { useState, memo, useRef } from 'react';
import './Contact.css';
import { Github, Linkedin, Instagram } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const SocialLink = memo(({ icon: Icon, link }) => (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-link-item"
    >
      <button className="social-button">
        <div className="social-button-glow"></div>
        <div className="social-button-container">
          <Icon />
        </div>
      </button>
    </a>
  ));
  const SOCIAL_LINKS = [
    { icon: Github, link: "https://github.com/AkaMizzy" },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/hamza-zily-5a9270302/",
    },
    { icon: Instagram, link: "https://www.instagram.com/mizzy.in4k/" },
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs.sendForm(
      'service_xpqw1gh', // Replace with your EmailJS service ID
      'template_6ml0gvk', // Replace with your EmailJS template ID
      form.current,
      'aChRyR_-K06tpP-Ou' // Replace with your EmailJS public key
    )
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      })
      .finally(() => {
        setLoading(false);
        // Reset submitted state after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      });
  };

  return (
    <div id="contact" className="contact-page">
      <section className="section contact-hero">
        <div className="container">
          <h1 className="section-title">Contactez-moi</h1>
          <p className="contact-subtitle">
          Vous avez une question, une idée de projet ou simplement envie de me dire bonjour ? 
          N'hésitez pas à me contacter ! 
          Je suis toujours ouvert à discuter de nouveaux projets, 
          d'idées créatives ou d'opportunités de contribuer à votre vision.
          </p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container contact-container">
          <div className="contact-info">
            <h2>Coordonnées</h2>
            <p>N'hésitez pas à me contacter via l'un de ces canaux. Je vous recontacterai dès que possible.</p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">📧</div>
                <div className="contact-item-content">
                  <h3>E-mail</h3>
                  <p><a href="mailto:hamzazily@gmail.com">hamzazily@gmail.com</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">📱</div>
                <div className="contact-item-content">
                  <h3>Téléphone</h3>
                  <p><a href="tel:+212641298620">+212 6 41 29 86 20</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div className="contact-item-content">
                  <h3>Lieu</h3>
                  <p>Casablanca, Morocco</p>
                </div>
              </div>
            </div>
            
            <div
              className="hidden sm:flex gap-6 justify-start"
              data-aos="fade-up"
              data-aos-delay="1600"
              style={{ marginTop: "1rem" }}
            >
              {SOCIAL_LINKS.map((social, index) => (
                <SocialLink key={index} {...social} />
              ))}
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Envoyer un message</h2>
            {submitted ? (
              <div className="success-message">
                <p>Merci pour votre message ! Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
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
                  <label htmlFor="subject">Sujet</label>
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
                
                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={loading}
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;