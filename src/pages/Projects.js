import React, { useState } from 'react';
import './Projects.css';
import wasafati from '../assets/websiteImages/wasafati.png';
import letdem from '../assets/websiteImages/letdem.png';
import stu from '../assets/websiteImages/student_management.png';
const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'LETDEM',
      description: 'Un site web dédié à la présentation d’un laboratoire, mettant en avant ses membres, ses événements, ses productions scientifiques, ses travaux doctoraux et sa galerie multimédia.',
      image: letdem,
      category: 'web',
      technologies: ['React', 'Laravel', 'REST API','MySQL'],
      demoLink: 'https://labo-letdem.com/',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'Wasafati',
      description: 'Wasafati est le guide ultime de la cuisine marocaine authentique. Il a été conçu avec la passion de partager avec le monde entier les recettes et les techniques de cuisine marocaines traditionnelles.',
      image: wasafati,
      category: 'web',
      technologies: ['HTML', 'CSS', 'Bootstrap','Font Awesome','Google Fonts'],
      demoLink: 'https://wasafati.vercel.app/',
      codeLink: 'https://github.com/AkaMizzy/Wasafati',
    },
    {
      id: 3,
      title: 'Student management',
      description: "Un système de gestion des étudiants basé sur Java Swing pour les établissements d'enseignement qui gère les dossiers des étudiants, les notes et le suivi de l'assiduité.",
      image: stu,
      category: 'app',
      technologies: ['Java', 'Java Swing', 'JDBC','MySQL'],
      demoLink: '#',
      codeLink: 'https://github.com/AkaMizzy/student_management',
    },
  ];

  // Filter projects based on category
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  // Handle filter change
  const handleFilterChange = (category) => {
    setFilter(category);
  };

  return (
    <div id="projects" className="projects-page">
      <section className="section projects-hero">
        <div className="container">
          <h1 className="section-title">Mes projets</h1>
          <p className="projects-subtitle">
          Découvrez mon parcours à travers mes projets et expertises techniques. 
          Chaque section illustre une étape clé de mon apprentissage continu
          </p>
        </div>
      </section>

      <section className="section projects-grid-section">
        <div className="container">
          <div className="projects-filter">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterChange('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
              onClick={() => handleFilterChange('web')}
            >
              Web
            </button>
            <button 
              className={`filter-btn ${filter === 'app' ? 'active' : ''}`}
              onClick={() => handleFilterChange('app')}
            >
              Apps
            </button>
          </div>

          <div className="projects-count">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div className="project-card" key={project.id}>
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((tech, index) => (
                      <span className="project-tag" key={index}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                    <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Projects;