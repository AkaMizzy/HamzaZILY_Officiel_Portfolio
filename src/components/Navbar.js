import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';
import cv from "../assets/pdf/CV_Hamza_Zily.pdf"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ];

  // Improved scroll handling for Safari
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Close menu first to prevent iOS issues
    setIsOpen(false);

    // Small delay to ensure menu is closed
    setTimeout(() => {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      
      // Use requestAnimationFrame for smoother scrolling
      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      });
    }, 10);
  }, []);

  // Improved menu toggle for iOS
  const toggleMenu = useCallback(() => {
    // Prevent scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    setIsOpen(!isOpen);
  }, [isOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  // Update scroll handler with improved performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.pageYOffset > 50);
          
          const sections = navItems.map(item => {
            const element = document.getElementById(item.id);
            if (element) {
              return {
                id: item.id,
                offset: element.offsetTop,
                height: element.offsetHeight
              };
            }
            return null;
          }).filter(Boolean);

          const currentPosition = window.pageYOffset + 100;
          const currentSection = sections.find(section => 
            currentPosition >= section.offset && 
            currentPosition < section.offset + section.height
          );

          if (currentSection) {
            setActiveSection(currentSection.id);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);
   const handleDownload = (e) => {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = cv ; 
      link.download = "CV_Hamza_Zily.pdf";
      link.click();
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <span>HamzaZILY</span>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            {navItems.map((item) => (
              <li 
                key={item.id}
                className={activeSection === item.id ? 'active' : ''}
              >
                <button 
                  onClick={() => scrollToSection(item.id)}
                  role="link"
                  aria-label={`Scroll to ${item.label}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
            <button 
                  className="btn btn-outline"
                  onClick={handleDownload}
                >
                  Télécharger le CV
                </button>
            </li>
          </ul>
        </div>

        <button 
          className="navbar-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;