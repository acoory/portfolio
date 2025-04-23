import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';

interface AboutProps {
  children: ReactNode;
}

const About: React.FC<AboutProps> = ({ children }) => {
  return (
    <motion.section 
      id="about" 
      className="section"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>À propos</h2>
      <div className="about-content">
        {children}
      </div>
    </motion.section>
  );
};

export default About; 