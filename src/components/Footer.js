import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Hamza</h2>
            <p>Créer des expériences numériques qui comptent.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Liens rapides</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Social</h3>
              <ul>
                <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} HamzaZILY. Tous droits réservés.</p>
          <p>Made with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 