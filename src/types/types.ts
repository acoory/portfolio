import React from "react";

export interface Experience {
  id: string;
  company: string;
  logo: string;
  role: string;
  period: string;
  location?: string;
  description?: string;
  richDescription?: React.ReactNode;
}

export interface Education {
  id: string;
  institution: string;
  logo: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  richDescription?: React.ReactNode;
  technologies: string[];
  websiteUrl?: string;
  sourceUrl?: string;
}

export interface Realisation {
  id: string;
  name: string;
  logo: string;
  displayName: string;
  period: string;
  location: string;
  description: React.ReactNode;
}

export interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
} 