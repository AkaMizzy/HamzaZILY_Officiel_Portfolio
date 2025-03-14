import React, { memo, useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Github, Linkedin, Instagram } from "lucide-react";


const TechStack = ({ tech }) => <div className="tech-stack-item">{tech}</div>;

const Home = () => {
  const TECH_STACK = [
    "React",
    "Angular",
    "Ionic",
    "Javascript",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "PHP",
    "Laravel",
    "Java",
    "J2EE",
  ];
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
  const WORDS = [
    "un Développeur Web",
    "un Développeur Full-Stack",
    "un Développeur Front-End",
    "un Développeur Back-End",
    "un ingénieur en logiciel",
    "un Développeur Mobile",
  ];
  const TYPING_SPEED = 100;
  const ERASING_SPEED = 50;
  const PAUSE_DURATION = 2000;
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText((prev) => prev + WORDS[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);
  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

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
    <div id="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Bonjour, je suis <span className="highlight">Hamza ZILY</span> <br />
              <p style={{fontSize: '2rem'}}>
                <div className="typing-container" data-aos="fade-up" data-aos-delay="800">
                  <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                    {text}
                  </span>
                  <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
                </div>
              </p>
            </h1>
            <p className="hero-description">
              Création de application Web innovants, fonctionnels et conviviaux
              pour les solutions numériques.
            </p>
            <div
              className="tech-stack-container"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              {TECH_STACK.map((tech, index) => (
                <TechStack key={index} tech={tech} />
              ))}
            </div>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                Voir les projets
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-outline">
                Contactez-moi
              </button>
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
          <div className="hero-image">
            <div className="image-container">
              {/* Placeholder for hero image */}
              <div className="placeholder-image"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
