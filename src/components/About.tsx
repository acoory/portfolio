import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';

interface AboutProps {
  content: string;
}

const About: React.FC<AboutProps> = ({ content }) => {
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
      <p>{content}</p>
    </motion.section>
  );
};

export default About; 