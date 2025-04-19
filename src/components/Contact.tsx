import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/variants';

interface ContactProps {
  message: string;
}

const Contact: React.FC<ContactProps> = ({ message }) => {
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
      >
        {message}
      </motion.p>
    </motion.section>
  );
};

export default Contact; 