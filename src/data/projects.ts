import { Project } from '../types/types';
import React from 'react';

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'Igaar Vizion',
    period: 'Août 2024 - Présent',
    description: 'Système de vidéosurveillance intelligent pour entreprises, utilisant l\'IA pour détecter des incidents critiques (intrusions, incendies). Architecture temps réel et résiliente.',
    richDescription: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Système de ', React.createElement('strong', null, 'vidéosurveillance intelligent'), ' pour entreprises, utilisant l\'IA pour détecter en temps réel :'),
      React.createElement('ul', { style: { listStyleType: 'disc', paddingLeft: '20px' } },
        React.createElement('li', null, 'Intrusions et comportements suspects'),
        React.createElement('li', null, 'Départs de feu et situations dangereuses'),
        React.createElement('li', null, 'Anomalies opérationnelles')
      ),
      React.createElement('p', null, 'Architecture distribuée, ', React.createElement('em', null, 'hautement résiliente'), ' et conçue pour le traitement en temps réel.')
    ),
    technologies: ['Spring Boot', 'Go', 'Flask', 'React Native', 'PostgreSQL', 'Redis', 'AWS'],
    websiteUrl: 'https://igaar.fr'
  },
  {
    id: 'le-bouddoir',
    title: 'Le Bouddoir',
    period: 'Mai 2023 - Juin 2023',
    description: 'Site web dynamique pour un restaurant à Aix-en-Provence, offrant une expérience fluide pour consulter menus, horaires et réservations en ligne.',
    richDescription: React.createElement(React.Fragment, null,
        React.createElement('p', null, React.createElement('strong', null, 'Site web dynamique'), ' pour un restaurant à Aix-en-Provence, avec :'),
        React.createElement('ul', { style: { listStyleType: 'disc', paddingLeft: '20px' } },
            React.createElement('li', null, 'Présentation attrayante des menus et spécialités'),
            React.createElement('li', null, 'Système de réservation en ligne intuitif'),
            React.createElement('li', null, 'Galerie photo immersive'),
            React.createElement('li', null, 'Informations pratiques (horaires, adresse, contact)')
        ),
        React.createElement('p', null, 'Développé avec ', React.createElement('em', null, 'React.js'), ' et ', React.createElement('em', null, 'Tailwind CSS'), ', déployé avec Docker et Ansible.')
    ),
    technologies: ['React', 'Tailwind CSS', 'Nginx', 'Docker', 'Ansible'],
    websiteUrl: 'https://restaurant-lebouddoir-aix.fr/'
  },
  {
    id: 'digital-express',
    title: 'DigitalExpress',
    period: 'Décembre 2023 - Présent',
    description: 'Solution SaaS pour les restaurateurs permettant de moderniser leur présence en ligne, gérer les réservations et recueillir les retours clients.',
    richDescription: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Solution ', React.createElement('strong', null, 'SaaS complète'), ' pour les restaurateurs, permettant de :'),
      React.createElement('ul', { style: { listStyleType: 'disc', paddingLeft: '20px' } },
        React.createElement('li', null, 'Moderniser leur présence en ligne'),
        React.createElement('li', null, 'Gérer efficacement les réservations'),
        React.createElement('li', null, 'Mettre en valeur les menus digitaux'),
        React.createElement('li', null, 'Recueillir et analyser les retours clients')
      ),
      React.createElement('p', null, 'Déploiement ', React.createElement('em', null, 'cloud-native'), ' avec infrastructure entièrement automatisée.')
    ),
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Docker', 'Ansible', 'Nginx', 'Linux', 'Tailwind'],
    websiteUrl: 'https://dashboard.digital-express.cloud/'
  },
  {
    id: 'your-job',
    title: 'Your Job',
    period: 'Mars 2024 - Avril 2024',
    description: 'Développement frontend d’une plateforme web de recherche d’emploi, dans le cadre d’une mission freelance, avec intégration de maquettes et architecture maintenable.',
    richDescription: React.createElement(React.Fragment, null,
        React.createElement('p', null, 'Développement du ', React.createElement('strong', null, 'frontend d’une application web de recherche d’emploi'), ' en mission freelance.'),
        React.createElement('ul', { style: { listStyleType: 'disc', paddingLeft: '20px' } },
            React.createElement('li', null, 'Initialisation du projet avec React et TypeScript'),
            React.createElement('li', null, 'Mise en œuvre des principes SOLID et Clean Architecture'),
            React.createElement('li', null, 'Intégration fidèle des maquettes fournies'),
            React.createElement('li', null, 'Développement de composants réutilisables'),
            React.createElement('li', null, 'Respect des bonnes pratiques de performance et d’accessibilité'),
            React.createElement('li', null, 'Collaboration étroite avec le client pour les ajustements fonctionnels')
        )
    ),
    technologies: ['React', 'TypeScript', 'Clean Architecture', 'Tailwind CSS'],
    websiteUrl: 'https://your-job.fr'
  },
  {
    id: 'la-panthere-seo',
    title: 'La Panthère SEO',
    period: 'Mars 2024 - Avril 2024',
    description: 'Optimisation SEO d\'un site à faible visibilité, améliorant vitesse de chargement, accessibilité et taille des pages. Analyse comparative des performances.',
    richDescription: React.createElement(React.Fragment, null,
        React.createElement('p', null, 'Projet d\'', React.createElement('strong', null, 'optimisation SEO'), ' complet, comprenant :'),
        React.createElement('ul', { style: { listStyleType: 'disc', paddingLeft: '20px' } },
            React.createElement('li', null, 'Audit technique approfondi du site existant'),
            React.createElement('li', null, 'Optimisation de la vitesse de chargement (-65%)'),
            React.createElement('li', null, 'Amélioration de l\'accessibilité (score WCAG AA)'),
            React.createElement('li', null, 'Réduction de la taille des pages et optimisation des images'),
            React.createElement('li', null, 'Rapport détaillé comparant les performances avant/après')
        )
    ),
    technologies: ['JavaScript', 'Sass'],
    websiteUrl: 'https://isoardimarius.github.io/LaPanthere/'
  },
  {
    id: 'ohmyfood',
    title: 'OhMyFood',
    period: 'Février 2024 - Mars 2024',
    description: 'Intégration mobile-first d\'une maquette pour startup de restauration, avec animations CSS avancées et adaptation fluide vers desktop/tablette.',
    richDescription: React.createElement(React.Fragment, null,
        React.createElement('p', null, React.createElement('strong', null, 'Intégration mobile-first'), ' pour une startup de restauration innovante :'),
        React.createElement('ul', { style: { listStyleType: 'disc', paddingLeft: '20px' } },
            React.createElement('li', null, 'Respect strict de la maquette fournie par le designer UI'),
            React.createElement('li', null, 'Animations CSS complexes sans JavaScript'),
            React.createElement('li', null, 'Adaptation responsive vers tablette et desktop'),
            React.createElement('li', null, 'Performance optimisée (98/100 PageSpeed)'),
            React.createElement('li', null, 'Accessibilité respectant les normes WCAG')
        )
    ),
    technologies: ['JavaScript', 'Sass'],
    websiteUrl: 'https://isoardimarius.github.io/OhMyFood/'
  },
  {
    id: 'tuto-ansible',
    title: 'Tutoriel Ansible',
    period: 'Février 2024 - Février 2024',
    description: 'Guide complet d\'installation et configuration d\'Ansible sur serveur Debian, couvrant les playbooks, variables, inventaires et plugins.',
    richDescription: React.createElement(React.Fragment, null,
      React.createElement('p', null, React.createElement('strong', null, 'Guide pratique'), ' pour l\'installation et la configuration d\'Ansible, couvrant :'),
      React.createElement('ul', { style: { listStyleType: 'disc', paddingLeft: '20px' } },
        React.createElement('li', null, 'Installation sur serveur Debian'),
        React.createElement('li', null, 'Création et organisation des playbooks'),
        React.createElement('li', null, 'Gestion des variables et inventaires'),
        React.createElement('li', null, 'Utilisation des modules et plugins'),
        React.createElement('li', null, 'Bonnes pratiques d\'automatisation')
      )
    ),
    technologies: ['Ansible'],
    websiteUrl: 'https://pepper-trumpet-e77.notion.site/Tutoriel-Ansbile-1118e581ed678043a684d02d90424851?pvs=4'
  },
]; 