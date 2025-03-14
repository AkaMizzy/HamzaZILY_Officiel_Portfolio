import React, { useCallback } from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    
    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    });
  }, []);

  const quickLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    { label: 'GitHub', url: 'https://github.com/AkaMizzy' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/hamza-zily-5a9270302/' },
    { label: 'Instagram', url: 'https://www.instagram.com/mizzy.in4k/' }
  ];

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
                {quickLinks.map(link => (
                  <li key={link.id}>
                    <button 
                      onClick={() => scrollToSection(link.id)}
                      className="footer-link-button"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Social</h3>
              <ul>
                {socialLinks.map(link => (
                  <li key={link.label}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
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