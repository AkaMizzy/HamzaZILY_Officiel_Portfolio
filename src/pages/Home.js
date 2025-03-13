import React, { memo, useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Github, Linkedin, Instagram } from "lucide-react";
import About from "./About";

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
    <a href={link} target="_blank" rel="noopener noreferrer" className="mx-2">
      {" "}
      {/* Added mx-2 for spacing */}
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
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/hamza-zily-5a9270302/",
    },
    { icon: Instagram, link: "https://www.instagram.com/mizzy.in4k/" },
  ];
  const WORDS = [
    "un développeur Front-End",
    "un développeur Back-End",
    "un développeur Full-Stack",
    "un ingénieur en logiciel",
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

  return (
    <div>
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
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
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
