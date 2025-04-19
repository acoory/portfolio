import React from 'react';
import { motion } from 'framer-motion';
import { buttonHover, buttonTap } from '../animations/variants';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.button 
        onClick={toggleTheme} 
        className="theme-toggle"
        whileHover={buttonHover}
        whileTap={buttonTap}
      >
        Changer de thème
      </motion.button>
    </motion.footer>
  );
};

export default Footer; 