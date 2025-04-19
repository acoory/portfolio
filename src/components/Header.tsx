import React from 'react';
import { motion } from 'framer-motion';
import { headerVariant, logoHover } from '../animations/variants';

interface HeaderProps {
  name: string;
  subtitle: string;
  initials: string;
}

// Animation pour le texte lettre par lettre
const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03
    }
  }
};

const letterVariants = {
  hidden: { 
    opacity: 0, 
    y: 10,
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 200,
      damping: 12
    }
  }
};

// Animation pour l'emoji
const emojiVariants = {
  hidden: { opacity: 0, rotate: -30, scale: 0 },
  visible: { 
    opacity: 1, 
    rotate: 0, 
    scale: 1,
    transition: {
      delay: 0.8,
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  },
  hover: {
    rotate: [0, 15, 0, 15, 0],
    transition: {
      duration: 0.6
    }
  }
};

const Header: React.FC<HeaderProps> = ({ name, subtitle, initials }) => {
  const introText = "Salut, je suis ";
  
  return (
    <motion.header 
      className="header"
      variants={headerVariant}
    >
      <div className="intro">
        <h1 style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {introText.split('').map((char, index) => (
              <motion.span
                key={`intro-${index}`}
                variants={letterVariants}
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.span
            variants={textVariants}
            initial="hidden"
            animate="visible"
            style={{ 
              display: "inline-block", 
              fontWeight: "bold",
              background: "linear-gradient(to right, #4f46e5, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            {name.split('').map((char, index) => (
              <motion.span
                key={`name-${index}`}
                variants={letterVariants}
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
          
          <motion.span
            variants={emojiVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            style={{ display: "inline-block", marginLeft: "5px", cursor: "pointer" }}
          >
            👋
          </motion.span>
        </h1>
        
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div 
          className="name-logo"
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={logoHover}
        >
          {initials}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header; 