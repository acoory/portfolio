export interface Experience {
  id: string;
  company: string;
  logo: string;
  role: string;
  period: string;
  description?: string;
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
  technologies: string[];
  websiteUrl?: string;
  sourceUrl?: string;
}

export interface Hackathon {
  id: string;
  name: string;
  logo: string;
  displayName: string;
  period: string;
  location: string;
  description: string;
}

export interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
} 