import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { techCardsItems } from "../components/constants";
import TechCard from "../components/TechCard";
import { motion } from "framer-motion";

const About = () => {
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
  };
  return (
    <div >
      {/* About Hero Section */}
      <section className="section about-hero" >
        <div className="container" id="about">
          <h1 className="section-title">À propos de moi</h1>
          <div className="about-hero-content">
            <div className="about-hero-image">
              <div className="placeholder-profile">
                <img 
                  src="/DSC_8405.png" 
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
            </div>
            <div className="about-hero-text">
              <h2>Hamza</h2>
              <h3>Développeur Full-Stack</h3>
              <p>
              Passionné par le développement web et spécialisé en génie logiciel, 
              je combine expertise en frontend, 
              backend et conception de logiciels pour créer des expériences numériques impactantes. 
              Avec une solide maîtrise des technologies modernes, j’accorde une attention particulière à l’ergonomie et à la performance des interfaces. 
              Curieux et rigoureux, j’aime relever des défis techniques et innover pour concevoir des solutions efficaces et intuitives..
              </p>
              <p>
              Mon parcours m’a permis de travailler sur divers projets, 
              allant de simples pages vitrines à des applications web complexes.
              Attaché aux bonnes pratiques, je privilégie un code propre et maintenable tout en restant à jour avec les dernières tendances du secteur. 
              Toujours en quête d’amélioration, je m’efforce d’offrir des solutions à la fois esthétiques et fonctionnelles, 
              adaptées aux besoins des utilisateurs.
              </p>
              <div className="about-cta">
              <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
                Contactez-moi
              </button>
                <a 
                  href="/src/assets/pdf/cv_hamza_zily.pdf" 
                  className="btn btn-outline"
                  download
                >
                  Télécharger le CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="container">
          <h2 className="section-title">Technologies Maîtrisées</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="skills-grid"
          >
            {techCardsItems.map((cardItem) => (
              <TechCard key={cardItem.name} cardInfo={cardItem} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience-section">
        <div className="container">
          <h2 className="section-title">Expérience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Stagiaire Développeur Frontend</h3>
                <h4>GLOBAL SECURE IT</h4>
                <p className="timeline-date">Novembre 2024 - Janvier 2025</p>
                <p className="timeline-description">
                  Développement d'un site e-commerce spécialisé dans la vente de chaussures, 
                  en appliquant les meilleures pratiques de conception et d'optimisation frontend.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Développeur full stack Freelance</h3>
                <h4>LETDEM</h4>
                <p className="timeline-date">Décembre 2024 - Mars 2025</p>
                <p className="timeline-description">
                  Création d'applications web réactives et compatibles multi-navigateurs, 
                  adaptées aux exigences spécifiques de l'entreprise.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Stagiaire Développeur Mobile</h3>
                <h4>PROGICIEL SYSTEM</h4>
                <p className="timeline-date">Mars 2023 - Mai 2023</p>
                <p className="timeline-description">
                  Conception et développement d'une application mobile de gestion des commandes 
                  en utilisant Flutter, en mettant l'accent sur l'expérience utilisateur et la performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Education Section */}
      <section className="section education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-content">
            <div className="education-item">
              <h3>Licence professionnelle en Génie Logiciel</h3>
              <h4>Ecole Supérieure en Ingénierie de l'Information, 
                Télécommunication, Management & Génie Civil - ESTEM</h4>
              <p className="education-date">2024 - 2025</p>
              <p className="education-description">
                • Études avancées en génie logiciel et développement d’applications.<br />
                • Programmation orientée objet et conception logicielle.<br />
                • Gestion de bases de données et optimisation des performances.<br />
              </p>
            </div>
            
            <div className="education-item">
              <h3>Technicien spécialisé en développement 
              digital option Full-Stack</h3>
              <h4>Institut Spécialisé de Technologie Appliquée NTIC 1 
              Sidi Maarouf</h4>
              <p className="education-date">2022 - 2024</p>
              <p className="education-description">
                • Formation en développement web<br />
                • Apprentissage des langages et frameworks (React, Laravel, Java EE).<br />
                • Conception et manipulation de bases de données SQL et NoSQL.<br />
                • Fondamentaux de l’administration système et du déploiement d’applications.
              </p>
            </div>

            <div className="education-item">
              <h3>Économie et Gestion</h3>
              <h4>Faculté des Sciences Juridiques, Économiques et Sociales de Casablanca</h4>
              <p className="education-date">2021 - 2022</p>   
            </div>

            <div className="education-item">
              <h3>Baccalauréat Sciences Physique et Chimie</h3>
              <h4>Lycée Hassan II</h4>
              <p className="education-date">2021 - 2022</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;