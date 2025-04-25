import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types/types';
import { fadeInUp, staggerContainer, itemVariant, projectCardHover, buttonHover, buttonTap } from '../animations/variants';

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div 
      className="project-card" 
      variants={itemVariant}
      whileHover={projectCardHover}
    >
      <h3>{project.title}</h3>
      <p className="date">{project.period}</p>
      <p className="description">{project.description}</p>
      <div className="project-tech">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {project.websiteUrl && (
          <motion.a 
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            Site Web
          </motion.a>
        )}
        {project.sourceUrl && (
          <motion.a 
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            Source
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <motion.section 
      id="projects" 
      className="section"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2>Mes Projets</h2>
      <motion.p 
        className="section-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        J'ai travaillé sur différents projets, des sites web simples aux applications web et mobiles complexes. Voici quelques-uns de mes favoris.
      </motion.p>
      
      <motion.div 
        className="projects-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects; 