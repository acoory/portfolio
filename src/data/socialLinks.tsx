// Configuration centralisée des liens sociaux et informations de contact
// Ces données seront utilisées par divers composants (Contact, Navbar, etc.)

import React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
  icon: React.ReactNode;
  showInNavbar?: boolean;
  showInContact?: boolean;
}

// Icônes SVG pour les différentes plateformes
const icons = {
  home: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
    </svg>
  ),
  stackOverflow: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" height="34" width="34" fill="currentColor">
      <path className="st0" d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z"/>
      <path className="st1"
            d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z"/>
    </svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  ),
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  )
};

// Données de contact principales
export const contactEmail = "anthonycory13@hotmail.com";
export const contactPhone = "+33 6 17 10 77 88";
export const contactMessage = "Vous souhaitez discuter d'une opportunité professionnelle ou d'une collaboration ? Je suis particulièrement intéressé par les postes de Cloud Engineer, mais reste ouvert aux missions fullstack. N'hésitez pas à me contacter via LinkedIn ou par email.";

// Liste des liens sociaux
export const socialLinks: SocialLink[] = [
  {
    name: "Accueil",
    url: "#",
    ariaLabel: "Accueil",
    icon: icons.home,
    showInNavbar: true,
    showInContact: false
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/14688113/lhony",
    ariaLabel: "Stack Overflow",
    icon: icons.stackOverflow,
    showInNavbar: true,
    showInContact: false
  },
  {
    name: "GitHub",
    url: "https://github.com/acoory",
    ariaLabel: "GitHub",
    icon: icons.github,
    showInNavbar: true,
    showInContact: false
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anthony-cory-682266190/",
    ariaLabel: "LinkedIn",
    icon: icons.linkedin,
    showInNavbar: true,
    showInContact: true
  },
  {
    name: "Email",
    url: `mailto:${contactEmail}`,
    ariaLabel: "Email",
    icon: icons.email,
    showInNavbar: true,
    showInContact: true
  },
];

// Filtres pour obtenir des sous-ensembles des liens
export const getNavbarLinks = () => socialLinks.filter(link => link.showInNavbar);
export const getContactLinks = () => socialLinks.filter(link => link.showInContact); 