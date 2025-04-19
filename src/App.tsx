import React from 'react';
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

// Données
import { experiences } from './data/experiences';
import { education } from './data/education';
import { skills } from './data/skills';
import { projects } from './data/projects';
import { hackathons } from './data/hackathons';

// Animations
import { pageTransition } from './animations/variants';

function App() {
  const { darkMode } = useTheme();

  // Contenu de la section À propos
  const aboutContent = `Fin 2022, j'ai quitté mon poste d'ingénieur logiciel pour me consacrer à plein temps à la création et au développement de mes propres entreprises SaaS. 
  Par le passé, j'ai poursuivi un double diplôme en informatique et en commerce, j'ai effectué des stages dans de grandes entreprises technologiques, 
  et j'ai participé à plus de 20 hackathons pour le plaisir.`;

  // Message de la section Contact
  const contactMessage = "Vous voulez discuter ? Envoyez-moi simplement un message direct avec une question sur Twitter et je répondrai dès que possible. J'ignorerai toute sollicitation.";

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <motion.div
        className="container main-container"
        initial="hidden"
        animate="visible"
        variants={pageTransition}
      >
        <Header 
          name="Prénom Nom" 
          subtitle="Développeur Web devenu Entrepreneur. J'adore construire des applications et aider les gens. Très actif sur Twitter." 
          initials="PN" 
        />

        <main className="main">
          <About content={aboutContent} />
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
    </div>
  );
}

export default App;
