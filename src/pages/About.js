import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* About Hero Section */}
      <section className="section about-hero">
        <div className="container">
          <h1 className="section-title">About Me</h1>
          <div className="about-hero-content">
            <div className="about-hero-image">
              <div className="placeholder-profile"></div>
            </div>
            <div className="about-hero-text">
              <h2>Hamza</h2>
              <h3>Frontend Developer</h3>
              <p>
                I'm a passionate frontend developer dedicated to creating exceptional 
                digital experiences. With a strong foundation in modern web technologies 
                and a keen eye for design, I craft interfaces that are not only visually 
                appealing but also highly functional and user-friendly.
              </p>
              <p>
                My journey in web development began several years ago, and since then 
                I've worked on a variety of projects, from simple landing pages to complex 
                web applications. I believe in writing clean, maintainable code and staying 
                up-to-date with the latest industry trends and best practices.
              </p>
              <div className="about-cta">
                <Link to="/contact" className="btn btn-primary">Contact Me</Link>
                <a href="#" className="btn btn-outline">Download Resume</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-content">
            <div className="skills-category">
              <h3>Frontend Development</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-name">HTML5</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">CSS3 / SASS</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">JavaScript (ES6+)</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">React</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Redux</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Responsive Design</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skills-category">
              <h3>Tools & Technologies</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-name">Git & GitHub</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Webpack</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">REST APIs</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Figma / Design Tools</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Performance Optimization</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Accessibility (WCAG)</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience-section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Senior Frontend Developer</h3>
                <h4>Tech Solutions Inc.</h4>
                <p className="timeline-date">2022 - Present</p>
                <p className="timeline-description">
                  Lead the frontend development of multiple web applications, 
                  collaborating with designers and backend developers to deliver 
                  high-quality products. Implemented modern React architecture 
                  and optimized performance for complex user interfaces.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Frontend Developer</h3>
                <h4>Web Innovators</h4>
                <p className="timeline-date">2020 - 2022</p>
                <p className="timeline-description">
                  Developed responsive, cross-browser compatible websites and web 
                  applications. Worked closely with UI/UX designers to implement 
                  pixel-perfect interfaces and improve user experience.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Junior Web Developer</h3>
                <h4>Digital Creators</h4>
                <p className="timeline-date">2018 - 2020</p>
                <p className="timeline-description">
                  Started my professional journey building various web projects. 
                  Learned and implemented best practices in HTML, CSS, and JavaScript. 
                  Collaborated in a team environment to deliver client projects.
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
              <h3>Bachelor of Computer Science</h3>
              <h4>University of Technology</h4>
              <p className="education-date">2014 - 2018</p>
              <p className="education-description">
                Specialized in Software Development with a focus on web technologies.
                Completed several practical projects and internships during my studies.
              </p>
            </div>
            
            <div className="education-item">
              <h3>Web Development Certification</h3>
              <h4>Tech Academy</h4>
              <p className="education-date">2019</p>
              <p className="education-description">
                Intensive 6-month program focused on modern frontend development
                technologies and frameworks, with emphasis on React ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 