import React from 'react';
import { motion } from 'framer-motion';
import { Hackathon } from '../types/types';
import { fadeInUp, staggerContainer, itemVariant, hackathonLogoHover } from '../animations/variants';

interface HackathonsProps {
  hackathons: Hackathon[];
}

const HackathonItem: React.FC<{ hackathon: Hackathon }> = ({ hackathon }) => {
  return (
    <motion.div className="hackathon-item" variants={itemVariant}>
      <motion.div 
        className="hackathon-logo"
        whileHover={hackathonLogoHover}
      >
        {hackathon.logo}
      </motion.div>
      <div className="hackathon-content">
        <h3>{hackathon.name}</h3>
        <p className="date">{hackathon.period}</p>
        <h4>{hackathon.displayName}</h4>
        <p className="location">{hackathon.location}</p>
        <p className="description">{hackathon.description}</p>
      </div>
    </motion.div>
  );
};

const Hackathons: React.FC<HackathonsProps> = ({ hackathons }) => {
  return (
    <motion.section 
      id="hackathons" 
      className="section"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2>Hackathons</h2>
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
        Pendant mes études, j'ai participé à plus de 20 hackathons. Des personnes de tout le pays se réunissaient pour construire des choses incroyables en 2-3 jours. C'était inspirant de voir les possibilités infinies créées par un groupe de personnes motivées et passionnées.
      </motion.p>
      
      <motion.div 
        className="hackathons-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {hackathons.map(hackathon => (
          <HackathonItem key={hackathon.id} hackathon={hackathon} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Hackathons; 