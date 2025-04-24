import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// Contexte
import { useTheme } from './context/ThemeContext';

// Composants
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';
import PortfolioTour from './components/PortfolioTour';

// Données
import { experiences } from './data/experiences';
import { education } from './data/education';
import { skills } from './data/skills';
import { projects } from './data/projects';
import { hackathons } from './data/hackathons';

// Animations
import { pageTransition } from './animations/variants';

const App: React.FC = () => {
  const { darkMode } = useTheme();
  const [showTour, setShowTour] = useState(true);
  const [visitedBefore, setVisitedBefore] = useState(false);

  // Vérifie si l'utilisateur a déjà visité le site
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedPortfolio');
    if (hasVisited) {
      setVisitedBefore(true);
      setShowTour(false);
    } else {
      // Pour les nouveaux visiteurs, on affichera d'abord le tutoriel
      setVisitedBefore(false);
      setShowTour(true);
    }
  }, []);

  const handleTourComplete = () => {
    setShowTour(false);
    // Marquer comme visité pour les prochaines visites
    localStorage.setItem('hasVisitedPortfolio', 'true');
  };

  // Appliquer la classe dark/light à l'élément html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Message de la section Contact
  const contactMessage = "Vous souhaitez discuter d'une opportunité professionnelle ou d'une collaboration ? Je suis particulièrement intéressé par les postes de Cloud Engineer, mais reste ouvert aux missions fullstack. N'hésitez pas à me contacter via LinkedIn ou par email.";

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <TopNavbar />
      <motion.div
        className="container main-container"
        initial="hidden"
        animate="visible"
        variants={pageTransition}
      >
        <Header 
          name="Marius Isoardi"
          subtitle="Développeur Fullstack avec une forte sensibilité DevOps / Cloud."
          initials="MI"
        />

        <main className="main">
          <About>
            <p>Actuellement en poste chez <strong>Hexacoffre</strong> en tant que développeur fullstack.</p>
            
            <p>Je travaille sur des projets techniques mêlant backend, frontend et infrastructure. Certifié <strong>AWS Cloud Practitioner</strong>, je m'oriente activement vers les métiers du Cloud, avec l'objectif de monter en expertise.</p>
            
            <div className="stack-container">
              <p className="stack-title">Stack Dev :</p>
              <div className="stack-items">
                <span className="stack-item">Spring Boot</span>
                <span className="stack-item">Express</span>
                <span className="stack-item">Flask</span>
                <span className="stack-item">React</span>
                <span className="stack-item">Java</span>
                <span className="stack-item">JS</span>
                <span className="stack-item">TS</span>
                <span className="stack-item">Go</span>
                <span className="stack-item">gRPC</span>
                <span className="stack-item">Redis</span>
                <span className="stack-item">MySQL</span>
              </div>
            </div>
            
            <div className="stack-container">
              <p className="stack-title">Stack Ops :</p>
              <div className="stack-items">
                <span className="stack-item">Terraform</span>
                <span className="stack-item">Kubernetes</span>
                <span className="stack-item">Ansible</span>
                <span className="stack-item">Docker</span>
                <span className="stack-item">GitLab CI/CD</span>
                <span className="stack-item">GitHub Actions</span>
                <span className="stack-item">AWS</span>
                <span className="stack-item">Azure</span>
              </div>
            </div>
            
            <p>Je privilégie un poste de <strong>Cloud Engineer</strong> tout en restant ouvert aux missions fullstack.</p>
          </About>

          <Experience experiences={experiences} />
          <Education educationList={education} />
          <Skills skills={skills} />
          <Projects projects={projects} />
          <Hackathons hackathons={hackathons} />
          <Contact message={contactMessage} />
        </main>
        
        <Footer />
      </motion.div>
      <Navbar />

      {/* Tutoriel pour les nouveaux visiteurs */}
      {!visitedBefore && showTour && (
        <PortfolioTour onComplete={handleTourComplete} />
      )}
    </div>
  );
};

export default App;
