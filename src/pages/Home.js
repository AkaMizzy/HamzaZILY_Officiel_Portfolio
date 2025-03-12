import React,{memo} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Github, Linkedin,  Instagram } from "lucide-react"

const TechStack = ({ tech }) => (
  <div className="tech-stack-item">
    {tech}
  </div>
);

const Home = () => {
  const TECH_STACK = [
    "React", "Angular", "Ionic", "Javascript", "CSS", "Tailwind CSS", "Bootstrap", 
    "Node.js", "PHP", "Laravel", "Java", "J2EE"
  ];
  const SocialLink = memo(({ icon: Icon, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="mx-2"> {/* Added mx-2 for spacing */}
      <button className="group relative p-3">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
        <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-3 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
          <Icon className="w-7 h-7 text-white group-hover:text-white transition-colors" />
        </div>
      </button>
    </a>
  ));
  const SOCIAL_LINKS = [
    { icon: Github, link: "https://github.com/AkaMizzy" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/hamza-zily-5a9270302/" },
    { icon: Instagram, link: "https://www.instagram.com/mizzy.in4k/" }
  ];
  
  
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Hamza</span> <br />
              A Full Stack Developer
            </h1>
            <p className="hero-description">
              Création de application Web innovants, fonctionnels et conviviaux pour les solutions numériques.
            </p>
            <div className="tech-stack-container" data-aos="fade-up" data-aos-delay="1200">
              {TECH_STACK.map((tech, index) => (
                <TechStack key={index} tech={tech} />
              ))}
            </div>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
              <Link to="/contact" className="btn btn-outline">Contact Me</Link>
            </div>
            <div className="hidden sm:flex gap-6 justify-start" data-aos="fade-up" data-aos-delay="1600" style={{marginTop: "1rem"}}>
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialLink key={index} {...social} />
                  ))}
                </div>
            
          </div>
          <div className="hero-image">
            <div className="image-container">
              {/* Placeholder for hero image */}
              <div className="placeholder-image"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="section about-preview">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate frontend developer with a strong focus on creating 
                clean, efficient, and user-friendly websites. With expertise in 
                React, JavaScript, and modern web technologies, I strive to deliver 
                high-quality solutions that meet business needs while providing 
                exceptional user experiences.
              </p>
              <Link to="/about" className="read-more">
                Read more about me <span className="arrow">→</span>
              </Link>
            </div>
            <div className="about-skills">
              <div className="skill-item">React</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">HTML & CSS</div>
              <div className="skill-item">Responsive Design</div>
              <div className="skill-item">UI/UX</div>
              <div className="skill-item">Web Accessibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section featured-projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-project"></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">E-Commerce Website</h3>
                <p className="project-description">
                  A fully responsive e-commerce platform built with React, featuring product listings, cart functionality, and secure checkout.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">Redux</span>
                  <span className="project-tag">Stripe</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Project</a>
                  <a href="#" className="project-link">Source Code</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-project"></div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Task Management App</h3>
                <p className="project-description">
                  A drag-and-drop task management application that helps users organize their projects and track progress.
                </p>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">TypeScript</span>
                  <span className="project-tag">Firebase</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Project</a>
                  <a href="#" className="project-link">Source Code</a>
                </div>
              </div>
            </div>
          </div>
          <div className="view-all">
            <Link to="/projects" className="btn btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Interested in working together?</h2>
            <p className="cta-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;