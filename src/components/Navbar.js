import React, { useState, useEffect } from 'react';
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const offset = 80; // Height of the navbar
    if (element) {
      const elementPosition = element.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setScrolled(window.scrollY > 50);

      // Update active section
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

      const currentPosition = window.scrollY + 100;

      const currentSection = sections.find(section => 
        currentPosition >= section.offset && 
        currentPosition < section.offset + section.height
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
                <button onClick={() => scrollToSection(item.id)}>
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

        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;