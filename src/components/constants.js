import reactlogo from "../assets/logos/react.svg";
import gitlogo from "../assets/logos/git.svg";
import typescriptlogo from "../assets/logos/typescript.svg";
import tailwindlogo from "../assets/logos/tailwind.svg";
import htmllogo from "../assets/logos/html.svg";
import csslogo from "../assets/logos/css.svg";
import angularlogo from "../assets/logos/angular.svg";
import ioniclogo from "../assets/logos/ionic.svg";
import nodejslogo from "../assets/logos/nodejs.svg";
import expressjslogo from "../assets/logos/expressjs.svg";

// Frontend technologies
const frontendTech = [
  {
    name: "HTML", 
    description: "Langage de structuration web",
    imageUrl: htmllogo,
    bgColor: "bg-[#E44D26]/20",
    category: "Frontend"
  },
  {
    name: "CSS", 
    description: "Styles et mise en page",
    imageUrl: csslogo,
    bgColor: "bg-[#1572B6]/20",
    category: "Frontend"
  },
  {
    name: "Bootstrap", 
    description: "Framework CSS responsive", 
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    bgColor: "bg-[#7952B3]/20",
    category: "Frontend"
  },
  {
    name: "Tailwind", 
    description: "Framework CSS utilitaire",
    imageUrl: tailwindlogo,
    bgColor: "bg-[#38B2AC]/20",
    category: "Frontend"
  },
  {
    name: "React", 
    description: "Bibliothèque UI interactive",
    imageUrl: reactlogo,
    bgColor: "bg-[#61DAFB]/20",
    category: "Frontend"
  },
  {
    name: "Angular", 
    description: "Framework web dynamique",
    imageUrl: angularlogo,
    bgColor: "bg-[#DD0031]/20",
    category: "Frontend"
  },
  {
    name: "Ionic", 
    description: "Framework mobile hybride",
    imageUrl: ioniclogo,
    bgColor: "bg-[#3880FF]/20",
    category: "Frontend"
  },
  {
    name: "TypeScript", 
    description: "JavaScript typé",
    imageUrl: typescriptlogo,
    bgColor: "bg-[#3178C6]/20",
    category: "Frontend"
  },
];

// Backend technologies
const backendTech = [
  {
    name: "Node JS", 
    description: "Environnement JavaScript serveur",
    imageUrl: nodejslogo,
    bgColor: "bg-[#339933]/20",
    category: "Backend"
  },
  {
    name: "Express JS", 
    description: "Framework backend rapide",
    imageUrl: expressjslogo,
    bgColor: "bg-[#000000]/20",
    category: "Backend"
  },
  {
    name: "PHP", 
    description: "Langage web côté serveur",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    bgColor: "bg-[#777BB4]/20",
    category: "Backend"
  },
  {
    name: "Laravel", 
    description: "Framework PHP moderne",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    bgColor: "bg-[#FF2D20]/20",
    category: "Backend"
  },
  {
    name: "Java", 
    description: "Langage backend robuste",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    bgColor: "bg-[#007396]/20",
    category: "Backend"
  },
  {
    name: "J2EE", 
    description: "Plateforme Java d'entreprise",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    bgColor: "bg-[#ED1D25]/20",
    category: "Backend"
  },
];

// Database technologies
const databaseTech = [
  {
    name: "MySQL", 
    description: "Base de données relationnelle",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    bgColor: "bg-[#00546B]/20",
    category: "Database"
  },
  {
    name: "MongoDB", 
    description: "Base de données NoSQL",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    bgColor: "bg-[#00684A]/20",
    category: "Database"
  },
];

// Other technologies
const otherTech = [
  {
    name: "Git", 
    description: "Gestion de versions",
    imageUrl: gitlogo,
    bgColor: "bg-[#F05032]/20",
    category: "Other"
  },
  {
    name: "UML", 
    description: "Langage de modélisation",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg",
    bgColor: "bg-[#3178C6]/20",
    category: "Other"
  },
];

// Combine all categories
export const techCardsItems = [
  ...frontendTech,
  ...backendTech,
  ...databaseTech,
  ...otherTech
];

// Export categories separately for potential filtering
export const techCategories = {
  frontend: frontendTech,
  backend: backendTech,
  database: databaseTech,
  other: otherTech
};
