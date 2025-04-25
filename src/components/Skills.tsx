import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types/types';
import { fadeInUp, staggerContainer, skillVariant, skillHover } from '../animations/variants';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Regrouper les compétences par catégorie
  const categories = skills.reduce((acc, skill) => {
    if (skill.category) {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
    }
    return acc;
  }, {} as Record<string, Skill[]>);

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
      
      {Object.entries(categories).map(([category, categorySkills]) => (
        <div key={category} className="mb-6">
          <h3 className="text-lg font-semibold mb-3">{category}</h3>
          <motion.div 
            className="skills-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {categorySkills.map(skill => (
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
        </div>
      ))}
    </motion.section>
  );
};

export default Skills; 