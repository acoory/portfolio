// Variants pour les animations utilisés dans différents composants
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut" 
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const headerVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const skillVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.3
    }
  }
};

export const pageTransition = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const logoHover = {
  scale: 1.1, 
  rotate: 5,
  transition: {
    duration: 0.2
  }
};

export const companyLogoHover = {
  scale: 1.1, 
  backgroundColor: "#4c1d95"
};

export const educationLogoHover = {
  scale: 1.1, 
  backgroundColor: "#1e40af"
};

export const hackathonLogoHover = {
  scale: 1.1, 
  backgroundColor: "#6d28d9"
};

export const skillHover = {
  scale: 1.1, 
  backgroundColor: "#3b82f6", 
  color: "white"
};

export const projectCardHover = {
  y: -10, 
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
};

export const buttonHover = {
  scale: 1.05
};

export const buttonTap = {
  scale: 0.95
}; 