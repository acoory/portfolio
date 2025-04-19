import React from 'react';
import { motion } from 'framer-motion';
import { Education as EducationType } from '../types/types';
import { fadeInUp, staggerContainer, itemVariant, educationLogoHover } from '../animations/variants';

interface EducationProps {
  educationList: EducationType[];
}

const EducationItem: React.FC<{ education: EducationType }> = ({ education }) => {
  return (
    <motion.div className="education-item" variants={itemVariant}>
      <motion.div 
        className="education-logo"
        whileHover={educationLogoHover}
      >
        {education.logo}
      </motion.div>
      <div className="education-content">
        <h3>{education.institution}</h3>
        <p className="date">{education.period}</p>
        <p className="degree">{education.degree}</p>
        {education.description && <p className="description">{education.description}</p>}
      </div>
    </motion.div>
  );
};

const Education: React.FC<EducationProps> = ({ educationList }) => {
  return (
    <motion.section 
      id="education" 
      className="section"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>Éducation</h2>
      <motion.div 
        className="timeline"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {educationList.map(edu => (
          <EducationItem key={edu.id} education={edu} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education; 