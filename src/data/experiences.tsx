import React from 'react';
import { Experience } from '../types/types';

export const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'Freelance',
    logo: 'F',
    role: 'DEVELOPPEUR FULLSTACK',
    period: 'Mars - 2025',
    location: '',
    richDescription: (
      <>
        <p className="project-title">Kaydicoiffure.fr :</p>
        <ul>
          <li>Développement d'un système de gestion de réservations avec <strong>Nodejs</strong>, <strong>Express</strong> et <strong>TypeScript</strong> pour le backend, et gestion de la base de données via <strong>SequelizeORM</strong> et <strong>MySQL</strong>.</li>
          <li>Intégration des paiements avec <strong>StripeAPI</strong> et authentification via <strong>JWT</strong>.</li>
          <li>Notifications en temps réel gérées par <strong>Socketio</strong> et envoi d'emails automatisés via <strong>Nodemailer</strong>.</li>
          <li>Conteneurisation du projet avec <strong>Docker</strong> pour un déploiement simplifié.</li>
        </ul>
        
        <div className="transvert-container">
          <p className="transvers-title">Compétences transverses :</p>
          <ul>
            <li>Gestion de projet autonome, prenant en charge tous les aspects du projet, du développement à la mise en production, tout en respectant les attentes du client.</li>
            <li>Approche orientée client, avec une communication constante pour adapter la solution aux besoins réels du client, et ajuster les fonctionnalités en fonction de son feedback.</li>
            <li>Première expérience freelance, ayant dû naviguer entre les responsabilités techniques et la relation client, avec un focus sur l'efficacité et la réactivité.</li>
            <li>Adaptabilité et autonomie, avec une capacité à apprendre rapidement et à résoudre les problèmes en dehors des processus habituels de travail d'une équipe.</li>
          </ul>
        </div>
      </>
    )
  },
  {
    id: 'exp2',
    company: 'Digital-Paca',
    logo: 'D',
    role: 'DEVELOPPEUR FULLSTACK - DIGITAL-PACA',
    period: 'Jan 2023 - Janvier 2025',
    location: '',
    richDescription: (
      <>
        <p className="project-title">Maritima.fr : Nextjs / React / Expressjs / Redis / Tailwindcss / Docker / Nginx</p>
        <ul>
          <li>Refonte complète avec <strong>Nextjs</strong> pour le web client, <strong>React</strong> pour la console d'administration et <strong>Express</strong> pour le backend.</li>
          <li>Application entièrement conteneurisée via <strong>Docker</strong> déployement via <strong>CI/CD</strong>.</li>
          <li>Amélioration du <strong>SEO</strong> et optimisation des performances via les bonnes pratiques <strong>Google</strong>.</li>
          <li>Gestion de serveur <strong>Ubuntu</strong> et optimisation des services existants pour des requêtes plus performantes et une meilleure scalabilité.</li>
        </ul>
        
        <div className="transvert-container">
          <p className="transvers-title">Compétences transverses :</p>
          <ul>
            <li>Communication et écoute active avec les clients pour comprendre les besoins métiers et adapter les solutions techniques.</li>
            <li>Gestion de projet agile avec un focus sur les résultats et la qualité, tout en respectant les délais.</li>
            <li>Esprit d'équipe et collaboration continue avec le designers, responsables produits et autres développeurs pour assurer la cohérence du projet.</li>
          </ul>
        </div>
        
        <p className="project-title">Corsica Ferries : React Native</p>
        <ul>
          <li>Développement de fonctionnalité permettant aux invités sur le même billet de demander une clé pour ouvrir la cabine. Envoi de <strong>notifications</strong>push une fois l'invitation acceptée.</li>
          <li>Utilisation d'une app <strong>React</strong> pour un <strong>WebAppBridge</strong>, avec vérification de l'application sur le dispositif de l'utilisateur.</li>
          <li>Implémentation du SDK de <strong>Saito</strong> côté natif pour une ouverture sécurisée via <strong>NFC</strong>, respect strict des normes de <strong>sécurité</strong>.</li>
        </ul>
        
        <div className="transvert-container">
          <p className="transvers-title">Compétences transverses :</p>
          <ul>
            <li>Approche centrée sur l'utilisateur, avec une attention particulière portée à l'expérience mobile et à la fluidité de l'interface.</li>
            <li>Sens de l'innovation, intégration de technologies modernes (NFC, notifications push) pour offrir des fonctionnalités avancées.</li>
            <li>Gestion des risques et respect des normes de sécurité dans la manipulation de données sensibles.</li>
          </ul>
        </div>
        
        <p className="project-title">Pickerr.io/We-pizz.fr : Flutter / Laravel</p>
        <ul>
          <li>Notifications push Google : Optimisation pour maximiser l'engagement et la fidélité des utilisateurs.</li>
          <li>Confidentialité de la galerie d'images : Restructuration complète garantissant une protection renforcée des données.</li>
          <li>Favoris pour une navigation fluide : Implémentation d'un système de favoris pour un accès rapide et personnalisé aux contenus.</li>
        </ul>
      </>
    )
  },
  {
    id: 'exp3',
    company: 'Agrove',
    logo: 'A',
    role: 'DEVELOPPEUR FRONT-END',
    period: '2020',
    location: '',
    richDescription: (
      <>
        <p className="project-title">Agrove : Wordpress</p>
        <ul>
          <li>Animation interactive : Création d'animations en utilisant css / javascript pour améliorer l'interactivité et l'engagement des utilisateurs</li>
          <li>Création de page web : Développement et design de nouvelles page web, responsive</li>
          <li>Optimisation des performances : Mise en œuvre de technique d'optimisation pour améliorer les temps de chargement des pages</li>
        </ul>
      </>
    )
  }
]; 