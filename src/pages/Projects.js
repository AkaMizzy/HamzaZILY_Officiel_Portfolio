import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      //description: 'A fully responsive e-commerce platform built with React, featuring product listings, cart functionality, and secure checkout.',
      image: 'placeholder',
      category: 'web',
      technologies: ['React', 'Redux', 'Stripe'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      //description: 'A drag-and-drop task management application that helps users organize their projects and track progress.',
      image: 'placeholder',
      category: 'web',
      technologies: ['React', 'TypeScript', 'Firebase'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      //description: 'A weather application that displays current and forecasted weather conditions for any location using a third-party API.',
      image: 'placeholder',
      category: 'app',
      technologies: ['JavaScript', 'API Integration', 'CSS3'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      //description: 'A personal portfolio website showcasing skills, projects, and contact information with a clean, modern design.',
      image: 'placeholder',
      category: 'web',
      technologies: ['React', 'Framer Motion', 'Styled Components'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 5,
      title: 'Recipe Finder App',
      //description: 'An application that allows users to search for recipes by ingredients, dietary restrictions, and meal types.',
      image: 'placeholder',
      category: 'app',
      technologies: ['React', 'Redux', 'REST API'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 6,
      title: 'Blog Platform',
      //description: 'A full-featured blog platform with user authentication, comment system, and content management.',
      image: 'placeholder',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoLink: '#',
      codeLink: '#',
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
                  <div className="placeholder-project"></div>
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