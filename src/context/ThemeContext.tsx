import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { ThemeContextType } from '../types/types';

// Création du contexte avec une valeur par défaut
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Props pour le provider
interface ThemeProviderProps {
  children: ReactNode;
}

// Provider qui expose le state et les méthodes
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Détection des préférences système pour le thème
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Initialisation du thème en fonction des préférences système
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  // Écouteur pour les changements de préférence système
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };
    
    // Ancien navigateurs utilisent addListener/removeListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // @ts-ignore - Pour la compatibilité avec d'anciens navigateurs
      mediaQuery.addListener(handleChange);
      return () => {
        // @ts-ignore
        mediaQuery.removeListener(handleChange);
      };
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Valeur exposée par le contexte
  const value = {
    darkMode,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme doit être utilisé à l\'intérieur d\'un ThemeProvider');
  }
  
  return context;
}; 