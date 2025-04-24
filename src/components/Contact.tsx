import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, itemVariant, buttonHover, buttonTap } from '../animations/variants';
import {contactMessage, getContactLinks} from "../data/socialLinks";

interface ContactProps {
  message?: string; // Message personnalisé optionnel
}

const Contact: React.FC<ContactProps> = ({ message = contactMessage }) => {
  const contactLinks = getContactLinks();

  return (
    <motion.section 
      id="contact" 
      className="section"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2>Contact</h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="contact-intro"
      >
        {message}
      </motion.p>

      <motion.div 
        className="social-links"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {contactLinks.map((link, index) => (
          <motion.a
            key={index + link.name}
            href={link.url}
            className="social-link"
            variants={itemVariant}
            whileHover={buttonHover}
            whileTap={buttonTap}
            aria-label={link.ariaLabel}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <span className="social-icon">{link.icon}</span>
            <span className="social-name">{link.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Contact; 