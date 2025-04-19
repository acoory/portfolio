import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types/types';
import { fadeInUp, staggerContainer, skillVariant, skillHover } from '../animations/variants';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <motion.section 
      id="skills" 
      className="section"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>Compétences</h2>
      <motion.div 
        className="skills-container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map(skill => (
          <motion.div 
            key={skill.id}
            className="skill" 
            variants={skillVariant}
            whileHover={skillHover}
          >
            {skill.name}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills; 