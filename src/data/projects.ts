import { Project } from '../types/types';
import React from 'react';

export const projects: Project[] = [
  {
    id: 'Kaydidicoiffure',
    title: 'Kaydidicoiffure',
    period: 'Mai 2025',
    description: 'Site web pour un salon de coiffure, avec une interface utilisateur moderne et une gestion des réservations en ligne.',
    technologies: ['React', 'Tailwind', 'Node.js', 'Express', 'MySQL', 'Docker', 'Nginx', 'ubuntu', 'Tailwind'],
    richDescription: React.createElement(React.Fragment, null,
      React.createElement('p', null, 'Site web pour un salon de coiffure, avec une interface utilisateur moderne et une gestion des réservations en ligne.'),
      React.createElement('ul', { style: { listStyleType: 'disc', paddingLeft: '20px' } },
        React.createElement('li', null, 'Interface utilisateur moderne'),
        React.createElement('li', null, 'Gestion des réservations en ligne')
      )
    ),
    websiteUrl: 'https://kaydidicoiffure.fr'
  },
  {
    id: 'igaar-vizion',
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
    technologies: ['Spring Boot', 'Go', 'Flask','React', 'React Native', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Tailwind'],
    websiteUrl: 'https://igaar.io'
  },
  {
    id: 'spotify-oauth',
    title: 'Spotify Web - OAuth 2.0',
    period: 'Mars 2023',
    description: "Application intégrée à l'API externe de Spotify. Le projet comprend l'implémentation de l'authentification OAuth2 permettant aux utilisateurs de se connecter en toute sécurité avec leurs comptes Spotify. Une fois authentifiés, les utilisateurs peuvent interagir avec l'API pour rechercher des morceaux, créer des playlists et accéder à leurs données musicales.",
    richDescription: React.createElement(React.Fragment, null,
      React.createElement('p', null, React.createElement('strong', null, "Application web Spotify"), " complète avec authentification OAuth2 :"),
      React.createElement('ul', { style: { listStyleType: 'disc', paddingLeft: '20px' } },
        React.createElement('li', null, "Implémentation de l'authentification OAuth2.0"),
        React.createElement('li', null, "Interface utilisateur intuitive pour la recherche de morceaux"),
        React.createElement('li', null, "Création et gestion de playlists personnalisées"),
        React.createElement('li', null, "Accès sécurisé aux données musicales de l'utilisateur"),
        React.createElement('li', null, "Utilisation avancée d'API tierces")
      )
    ),
    technologies: ['React', 'JavaScript', 'OAuth2.0', 'API Spotify', 'CSS', 'HTML'],
    websiteUrl: '',
    sourceUrl: 'https://github.com/acoory/Spotify-web-OAuth2.0'
  },
  {
    id: 'react-native-social',
    title: 'Clone Interfaces - Twitter, Instagram, Spotify',
    period: 'Novembre 2022',
    description: "Intégration des pages principales de Twitter, Instagram et Spotify dans une seule application mobile. L'objectif de ce projet était de reproduire les interfaces emblématiques de ces plateformes tout en respectant leurs designs uniques et leurs comportements spécifiques.",
    richDescription: React.createElement(React.Fragment, null,
      React.createElement('p', null, React.createElement('strong', null, "Application mobile multi-interfaces"), " qui met en avant mes compétences en intégration d'interfaces utilisateur et gestion de styles variés :"),
      React.createElement('ul', { style: { listStyleType: 'disc', paddingLeft: '20px' } },
        React.createElement('li', null, "Reproduction fidèle des interfaces principales de Twitter, Instagram et Spotify"),
        React.createElement('li', null, "Respect des designs spécifiques à chaque plateforme"),
        React.createElement('li', null, "Implémentation des comportements caractéristiques de chaque application"),
        React.createElement('li', null, "Gestion efficace des styles et des composants"),
        React.createElement('li', null, "Navigation intuitive entre les différentes interfaces")
      )
    ),
    technologies: ['React Native', 'JavaScript', 'CSS', 'Navigation', 'UI/UX'],
    sourceUrl: 'https://github.com/acoory/ReactNative_Twitter_Instagram_Spotify'
  },
  {
    id: 'react-native-deliveroo',
    title: 'Clone Deliveroo',
    period: 'Janvier 2023',
    description: "Développement d'une application mobile en React Native reproduisant la page principale de Deliveroo. Ce projet visait à démontrer mes compétences en intégration d'interfaces utilisateur complexes et en gestion de données dans un environnement mobile multi-plateformes.",
    richDescription: React.createElement(React.Fragment, null,
      React.createElement('p', null, React.createElement('strong', null, "Clone de l'application Deliveroo"), " avec une interface utilisateur similaire et des fonctionnalités de base :"),
      React.createElement('ul', { style: { listStyleType: 'disc', paddingLeft: '20px' } },
        React.createElement('li', null, "Liste des restaurants disponibles"),
        React.createElement('li', null, "Ajout de restaurants aux favoris pour un accès rapide"),
        React.createElement('li', null, "Interface utilisateur simple et réactive"),
        React.createElement('li', null, "Composants réutilisables pour une maintenance facilitée"),
        React.createElement('li', null, "Gestion efficace des données et de l'état de l'application")
      )
    ),
    technologies: ['React Native', 'JavaScript', 'Component Design', 'State Management'],
    sourceUrl: 'https://github.com/acoory/ReactNative-Deliveroo'
  },
  {
    id: 'react-native-manga',
    title: 'Application Manga',
    period: 'Décembre 2022',
    description: "Ce projet a été conçu dans le cadre de mon apprentissage de React Native. Les données fournies ne proviennent pas d'une API externe. Cette application nécessite Expo et Node.js pour fonctionner de manière optimale.",
    richDescription: React.createElement(React.Fragment, null,
      React.createElement('p', null, React.createElement('strong', null, "Application dédiée aux mangas"), " développée pour perfectionner mes compétences en React Native :"),
      React.createElement('ul', { style: { listStyleType: 'disc', paddingLeft: '20px' } },
        React.createElement('li', null, "Exploration et consultation d'une bibliothèque de mangas"),
        React.createElement('li', null, "Interface utilisateur intuitive et adaptée au contenu"),
        React.createElement('li', null, "Utilisation de données statiques pour simuler une API"),
        React.createElement('li', null, "Mise en pratique des concepts fondamentaux de React Native"),
        React.createElement('li', null, "Expérience d'apprentissage concrète avec un projet réel")
      )
    ),
    technologies: ['React Native', 'Expo', 'JavaScript', 'UI Design'],
    sourceUrl: 'https://github.com/acoory/ReactNative-MangaApp'
  },
  {
    id: 'tuto-ansible',
    title: 'Tutoriel Ansible',
    period: 'Février 2024 - Février 2024',
    description: "Guide complet d'installation et configuration d'Ansible sur serveur Debian, couvrant les playbooks, variables, inventaires et plugins.",
    richDescription: React.createElement(React.Fragment, null,
      React.createElement('p', null, React.createElement('strong', null, 'Guide pratique'), " pour l'installation et la configuration d'Ansible, couvrant :"),
      React.createElement('ul', { style: { listStyleType: 'disc', paddingLeft: '20px' } },
        React.createElement('li', null, 'Installation sur serveur Debian'),
        React.createElement('li', null, 'Création et organisation des playbooks'),
        React.createElement('li', null, 'Gestion des variables et inventaires'),
        React.createElement('li', null, 'Utilisation des modules et plugins'),
        React.createElement('li', null, "Bonnes pratiques d'automatisation")
      )
    ),
    technologies: ['Ansible'],
    // websiteUrl: 'https://pepper-trumpet-e77.notion.site/Tutoriel-Ansbile-1118e581ed678043a684d02d90424851?pvs=4',
    sourceUrl: 'https://github.com/acoory/ansible_deploy_automatically_boilerplate'
  },
]; 