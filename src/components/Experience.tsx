import React from 'react';
import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '../types/types';
import { fadeInUp, staggerContainer, itemVariant, companyLogoHover } from '../animations/variants';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const ExperienceItem: React.FC<{ experience: ExperienceType }> = ({ experience }) => {
    const { richDescription, description } = experience;

    let descriptionContent = null;
    if (richDescription) {
        descriptionContent = (
            <div className="experience-rich-description">{richDescription}</div>
        );
    } else if (description) {
        descriptionContent = (
            <p className="description">{description}</p>
        );
    }

    return (
        <motion.div className="experience-item" variants={itemVariant}>
            <motion.div
                className="company-logo"
                whileHover={companyLogoHover}
            >
                {experience.logo}
            </motion.div>
            <div className="experience-content">
                <h3>{experience.company}</h3>
                <p className="date">{experience.period}</p>
                {experience.location && <p className="location">{experience.location}</p>}
                <p className="job-title">{experience.role}</p>
                {descriptionContent}
            </div>
        </motion.div>
    );
};

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <motion.section 
      id="experience" 
      className="section"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2>Expérience Professionnelle</h2>
      <motion.div 
        className="timeline"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {experiences.map(experience => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience; 