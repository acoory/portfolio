import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface PortfolioTourProps {
  onComplete: () => void;
}

type TourStep = {
  id: number;
  target: string;
  title: string;
  content: React.ReactNode;
  placement: 'top' | 'bottom' | 'left' | 'right' | 'center';
  icon?: string;
};

const PortfolioTour: React.FC<PortfolioTourProps> = ({ onComplete }) => {
  const { darkMode } = useTheme();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showOverlay, setShowOverlay] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Couleurs dynamiques selon le thème
  const colors = {
    primary: '#4f46e5',
    primaryDark: '#4338ca',
    primaryLight: '#818cf8',
    background: darkMode ? '#1e1e2e' : 'white',
    text: darkMode ? '#e2e8f0' : '#334155',
    textMuted: darkMode ? '#94a3b8' : '#64748b',
    border: darkMode ? '#2d3748' : '#e2e8f0',
    overlay: darkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)',
    backdropBlur: darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.2)',
    boxShadow: darkMode 
      ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
      : '0 4px 20px rgba(0, 0, 0, 0.15)',
    buttonText: darkMode ? '#e2e8f0' : 'white',
  };

  // Définition des étapes du tutoriel avec icônes
  const tourSteps: TourStep[] = [
    {
      id: 0,
      target: 'body',
      title: 'Bienvenue sur mon portfolio!',
      content: (
        <>
          <p>Je suis Marius Isoardi, développeur Full Stack.</p>
          <p>Laissez-moi vous faire une rapide visite guidée!</p>
        </>
      ),
      placement: 'center',
      icon: '👋'
    },
    {
      id: 1,
      target: '.header',
      title: 'À propos de moi',
      content: 'Voici la section principale qui me présente avec mon nom et mon titre professionnel.',
      placement: 'bottom',
      icon: '👨‍💻'
    },
    {
      id: 2,
      target: '#about',
      title: 'À propos',
      content: 'Dans cette section, vous découvrirez mon parcours et ma philosophie de développement.',
      placement: 'top',
      icon: '📖'
    },
    {
      id: 3,
      target: '#experience',
      title: 'Expérience',
      content: 'Ici, vous pouvez explorer mon expérience professionnelle et les technologies que j\'utilise au quotidien.',
      placement: 'top',
      icon: '💼'
    },
    {
      id: 4,
      target: '#skills',
      title: 'Compétences',
      content: 'Cette section présente mes compétences techniques, organisées par domaine d\'expertise.',
      placement: 'top',
      icon: '🔧'
    },
    {
      id: 5,
      target: '#projects',
      title: 'Projets',
      content: 'Découvrez les projets sur lesquels j\'ai travaillé, avec des descriptions détaillées et les technologies utilisées.',
      placement: 'top',
      icon: '🚀'
    },
    {
      id: 6,
      target: '.top-navbar',
      title: 'Navigation',
      content: 'Utilisez cette barre de navigation pour accéder rapidement aux différentes sections du portfolio.',
      placement: 'bottom',
      icon: '🧭'
    },
    {
      id: 7,
      target: 'body',
      title: 'Merci pour votre visite!',
      content: (
        <>
          <p>N'hésitez pas à explorer le portfolio à votre rythme.</p>
          <p>Vous pouvez me contacter via les liens présents dans la section Contact.</p>
        </>
      ),
      placement: 'center',
      icon: '🙏'
    }
  ];

  // Détection du mode mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Obtient l'élément cible actuel
  const getCurrentTargetElement = () => {
    const step = tourSteps[currentStep];
    if (step.target === 'body' || step.placement === 'center') return null;
    return document.querySelector(step.target) as HTMLElement;
  };

  // Défile vers l'élément ciblé
  useEffect(() => {
    const targetElement = getCurrentTargetElement();
    
    if (targetElement) {
      // Défilement vers l'élément
      const yOffset = -80; // Offset pour tenir compte de la navbar
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    } else if (tourSteps[currentStep].target === 'body') {
      // Si c'est un écran central, défiler vers le haut
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [currentStep]);

  // Fonction pour positionner le tooltip en fonction de l'élément cible
  const positionTooltip = () => {
    const step = tourSteps[currentStep];
    const targetElement = getCurrentTargetElement();
    
    if (!step) return;
    
    // Déterminer la largeur du tooltip
    const tooltipWidth = isMobile ? window.innerWidth * 0.9 : 350;
    
    if (step.target === 'body' || step.placement === 'center') {
      // Position centrale pour le premier et dernier écran
      setTooltipPosition({
        x: window.innerWidth / 2 - tooltipWidth / 2,
        y: window.innerHeight / 2 - 100
      });
      return;
    }
    
    if (!targetElement) return;
    
    const rect = targetElement.getBoundingClientRect();
    
    // Calculer la position en fonction du placement
    let x = 0;
    let y = 0;
    
    if (isMobile) {
      // Sur mobile, on met le tooltip en bas de l'écran pour tous les éléments
      x = window.innerWidth / 2 - tooltipWidth / 2;
      y = window.innerHeight - 220;
    } else {
      switch (step.placement) {
        case 'top':
          x = rect.left + (rect.width / 2) - tooltipWidth / 2;
          y = rect.top - 180;
          break;
        case 'bottom':
          x = rect.left + (rect.width / 2) - tooltipWidth / 2;
          y = rect.bottom + 20;
          break;
        case 'left':
          x = rect.left - tooltipWidth - 20;
          y = rect.top + (rect.height / 2) - 75;
          break;
        case 'right':
          x = rect.right + 20;
          y = rect.top + (rect.height / 2) - 75;
          break;
      }
    }
    
    // Assurer que le tooltip reste dans les limites de l'écran
    x = Math.max(10, Math.min(x, window.innerWidth - tooltipWidth - 10));
    y = Math.max(10, Math.min(y, window.innerHeight - 200));
    
    setTooltipPosition({ x, y });
  };

  // Mettre à jour la position du tooltip quand l'étape change ou au scroll
  useEffect(() => {
    // Petite attente pour laisser le temps au défilement de se terminer
    const timer = setTimeout(() => {
      positionTooltip();
    }, 300);
    
    window.addEventListener('scroll', positionTooltip);
    window.addEventListener('resize', positionTooltip);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', positionTooltip);
      window.removeEventListener('resize', positionTooltip);
    };
  }, [currentStep, isMobile]);

  // Fonction pour passer à l'étape suivante
  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Terminer le tutoriel
      setShowOverlay(false);
      setTimeout(() => {
        onComplete();
      }, 300);
    }
  };

  // Fonction pour revenir à l'étape précédente
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Fonction pour quitter le tutoriel
  const skipTour = () => {
    setShowOverlay(false);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  // Animation des étapes
  const progressVariants = {
    initial: { width: 0 },
    animate: { width: `${((currentStep + 1) / tourSteps.length) * 100}%` }
  };

  return (
    <AnimatePresence>
      {showOverlay && (
        <>
          {/* Calque semi-transparent qui laisse voir le contenu */}
          {tourSteps[currentStep].target !== 'body' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: colors.backdropBlur,
                backdropFilter: 'blur(1px)',
                zIndex: 9997,
                pointerEvents: 'none',
              }}
            />
          )}

          {/* Effet de mise en évidence de l'élément ciblé */}
          {getCurrentTargetElement() && (
            <HighlightElement 
              targetElement={getCurrentTargetElement()} 
              color={colors.primary}
              overlayColor={colors.overlay}
              darkMode={darkMode}
            />
          )}

          {/* Tooltip / boîte de dialogue */}
          <motion.div
            key={`tooltip-${currentStep}`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ 
              type: "spring", 
              damping: 15, 
              stiffness: 300,
              duration: 0.3 
            }}
            style={{
              position: 'fixed',
              top: tooltipPosition.y,
              left: tooltipPosition.x,
              width: isMobile ? '90%' : '350px',
              backgroundColor: colors.background,
              borderRadius: '12px',
              boxShadow: colors.boxShadow,
              padding: '20px',
              zIndex: 9999,
              border: `1px solid ${colors.border}`,
            }}
          >
            {/* Indicateur de progression */}
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '4px', 
              backgroundColor: darkMode ? '#2d3748' : '#e2e8f0',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
              overflow: 'hidden'
            }}>
              <motion.div 
                variants={progressVariants}
                initial="initial"
                animate="animate"
                style={{ 
                  height: '100%', 
                  backgroundColor: colors.primary,
                  transition: 'width 0.3s ease'
                }}
              />
            </div>

            {/* En-tête avec icône et titre */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginTop: '10px',
              marginBottom: '15px'
            }}>
              <div style={{ 
                fontSize: '24px',
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: darkMode ? 'rgba(79, 70, 229, 0.2)' : 'rgba(79, 70, 229, 0.1)',
                flexShrink: 0
              }}>
                {tourSteps[currentStep].icon}
              </div>
              <h3 style={{ 
                color: colors.primary, 
                margin: 0, 
                fontSize: '1.2rem',
                fontWeight: 600,
              }}>
                {tourSteps[currentStep].title}
              </h3>
            </div>
            
            {/* Contenu */}
            <div style={{ 
              color: colors.text, 
              marginBottom: '20px',
              lineHeight: 1.5,
              fontSize: '0.95rem'
            }}>
              {tourSteps[currentStep].content}
            </div>

            {/* Compteur d'étapes */}
            <div style={{
              fontSize: '0.85rem',
              color: colors.textMuted,
              marginBottom: '15px',
              display: 'flex',
              justifyContent: 'center',
            }}>
              Étape {currentStep + 1} sur {tourSteps.length}
            </div>

            {/* Boutons d'action */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginTop: '15px'
            }}>
              <div>
                {currentStep > 0 && (
                  <button
                    onClick={prevStep}
                    style={{
                      background: 'transparent',
                      border: `1px solid ${colors.primary}`,
                      color: colors.primary,
                      padding: '8px 16px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      marginRight: '10px',
                      fontWeight: '600',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span style={{ marginRight: '5px' }}>←</span> Précédent
                  </button>
                )}
                
                {currentStep < tourSteps.length - 1 && (
                  <button
                    onClick={skipTour}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: colors.textMuted,
                      padding: '8px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                    }}
                  >
                    Passer
                  </button>
                )}
              </div>
              
              <button
                onClick={nextStep}
                style={{
                  background: colors.primary,
                  border: 'none',
                  color: colors.buttonText,
                  padding: '8px 16px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.2s',
                  boxShadow: darkMode 
                    ? '0 2px 5px rgba(79, 70, 229, 0.3)' 
                    : '0 2px 8px rgba(79, 70, 229, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {currentStep === tourSteps.length - 1 ? 'Terminer' : 'Suivant'} <span style={{ marginLeft: '5px' }}>→</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Composant séparé pour l'effet de mise en surbrillance
const HighlightElement: React.FC<{ 
  targetElement: HTMLElement | null; 
  color: string;
  overlayColor: string;
  darkMode: boolean;
}> = ({ targetElement, color, overlayColor, darkMode }) => {
  if (!targetElement) return null;

  const rect = targetElement.getBoundingClientRect();
  
  return (
    <motion.div
      className="spotlight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: rect.top - 8,
        left: rect.left - 8,
        width: rect.width + 16,
        height: rect.height + 16,
        borderRadius: '8px',
        zIndex: 9998,
        pointerEvents: 'none',
        boxShadow: `0 0 0 9999px ${overlayColor}, 0 0 15px rgba(79, 70, 229, 0.5)`,
        filter: darkMode 
          ? 'drop-shadow(0 0 15px rgba(79, 70, 229, 0.4))' 
          : 'drop-shadow(0 0 10px rgba(79, 70, 229, 0.3))',
      }}
    />
  );
};

export default PortfolioTour;