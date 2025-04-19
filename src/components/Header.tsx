import React from 'react';
import { motion } from 'framer-motion';
import { headerVariant, logoHover } from '../animations/variants';

interface HeaderProps {
  name: string;
  subtitle: string;
  initials: string;
}

const Header: React.FC<HeaderProps> = ({ name, subtitle, initials }) => {
  return (
    <motion.header 
      className="header"
      variants={headerVariant}
    >
      <div className="intro">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Salut, je suis {name} 👋
        </motion.h1>
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
        <motion.div 
          className="name-logo"
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={logoHover}
        >
          {initials}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header; 