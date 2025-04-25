import React, { useEffect } from 'react';
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
import Realisations from './components/Realisations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';

// Données
import { experiences } from './data/experiences';
import { education } from './data/education';
import { skills } from './data/skills';
import { projects } from './data/projects';
import { realisations } from './data/realisations';
import { contactMessage } from './data/socialLinks';

// Animations
import { pageTransition } from './animations/variants';

const App: React.FC = () => {
  const { darkMode } = useTheme();

  // Appliquer la classe dark/light à l'élément html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

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
          name="Anthony Cory"
          subtitle="Développeur Fullstack, passionné par les défis techniques et l’impact utilisateur."
          initials="AC"
        />

        <main className="main">
          <About>
            <p>Je m'appelle Anthony Cory, développeur passionné.</p>
            
            <p>Au-delà de mes compétences techniques, ce qui m'anime vraiment, c'est de participer activement à la construction de projets concrets. Je ne cherche pas à être un simple exécutant : je veux être un acteur à part entière, force de proposition, impliqué de la réflexion à la mise en production.</p>
            
            <p>Mon objectif ? :</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
              <li>Apporter des idées, pas seulement du code</li>
              <li>M'investir dans des projets qui ont du sens</li>
              <li>Continuer à apprendre, tout en faisant avancer les autres</li>
            </ul>
            
            {/* <div className="stack-container">
              <p className="stack-title">Stack Dev :</p>
              <div className="stack-items">
                <span className="stack-item">HTML</span>
                <span className="stack-item">CSS</span>
                <span className="stack-item">PHP</span>
                <span className="stack-item">Javascript</span>
                <span className="stack-item">Typescript</span>
                <span className="stack-item">SQL</span>
                <span className="stack-item">React</span>
                <span className="stack-item">React Native</span>
                <span className="stack-item">Next.js</span>
                <span className="stack-item">Express.js / Node.js</span>
                <span className="stack-item">Flutter / Dart</span>
                <span className="stack-item">Symfony 5</span>
              </div>
            </div> */}
            
            {/* <div className="stack-container">
              <p className="stack-title">Stack Ops :</p>
              <div className="stack-items">
                <span className="stack-item">Postman</span>
                <span className="stack-item">Docker</span>
                <span className="stack-item">Git</span>
                <span className="stack-item">Figma</span>
                <span className="stack-item">MySQL</span>
                <span className="stack-item">Redis Insight</span>
              </div>
            </div> */}
          </About>

          <Experience experiences={experiences} />
          <Education educationList={education} />
          <Skills skills={skills} />
          <Projects projects={projects} />
          {/* <Realisations realisations={realisations} /> */}
          <Contact message={contactMessage} />
        </main>
        
        <Footer />
      </motion.div>
      <Navbar />

    </div>
  );
};

export default App;
