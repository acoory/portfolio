import React from 'react';
import { motion } from 'framer-motion';
import { Realisation } from '../types/types';
import { fadeInUp, staggerContainer, itemVariant, realisationLogoHover } from '../animations/variants';

interface RealisationsProps {
  realisations: Realisation[];
}

const RealisationItem: React.FC<{ realisation: Realisation }> = ({ realisation }) => {
  return (
    <motion.div className="realisation-item" variants={itemVariant}>
      <motion.div 
        className="realisation-logo"
        whileHover={realisationLogoHover}
      >
        {realisation.logo}
      </motion.div>
      <div className="realisation-content">
        <h3>{realisation.name}</h3>
        <p className="date">{realisation.period}</p>
        <h4>{realisation.displayName}</h4>
        <p className="location">{realisation.location}</p>
        <div className="experience-rich-description">{realisation.description}</div>
      </div>
    </motion.div>
  );
};

const Realisations: React.FC<RealisationsProps> = ({ realisations }) => {
  return (
    <motion.section 
      id="realisations"
      className="section"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* <h2>Réalisations</h2>
      <motion.p 
        className="section-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        J'aime construire des choses
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Pendant mon parcours académique et professionnel, j'ai eu l'opportunité de développer des projets concrets : prototypes, collaborations ponctuelles, ou encore expérimentations personnelles autour d'outils, frameworks et architectures qui m'intéresse.
      </motion.p>
      
      <motion.div 
        className="realisations-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {realisations.map(realisation => (
          <RealisationItem key={realisation.id} realisation={realisation} />
        ))}
      </motion.div> */}
    </motion.section>
  );
};

export default Realisations;