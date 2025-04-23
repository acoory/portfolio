import React from 'react';
import { Experience } from '../types/types';

export const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'Igaar',
    logo: 'I',
    role: 'Co-fondateur',
    period: 'Août 2024 - Aujourd\'hui',
    location: 'Aix-en-Provence, Provence-Alpes-Côte d\'Azur, France',
    richDescription: (
        <>
          <p className="project-title">Développement de la plateforme Igaar Vizion</p>
          <p>Développement d'une application de vidéosurveillance intelligente pour entreprises, connectée à un moteur d'IA détectant des incidents critiques...</p>
          <p>Lors d'une alerte, des workflows automatisés sont déclenchés : notifications, archivage vidéo, etc.</p>
          <ul>
            <li>Rest API en Spring Boot, PostgreSQL, Redis.</li>
            <li>Micro-service Go pour la gestion des flux vidéo</li>
            <li>Micro-service Flask pour la surveillance par IA</li>
            <li>AWS SQS/SNS</li>
            <li>WebSockets</li>
            <li>App mobile React Native</li>
            <li>Coordination interservices</li>
            <li>DevOps, SOLID et Clean Architecture</li>
          </ul>
        </>
    )
  },
  {
    id: 'exp2',
    company: 'HexaCoffre',
    logo: 'H',
    role: 'Développeur Full Stack',
    period: 'Décembre 2023 - Aujourd\'hui',
    location: 'Marseille, Provence-Alpes-Côte d\'Azur, France · Hybride',
    richDescription: (
      <>
        <div>
          <p className="project-title">Modernisation d'une application Android de gestion d'armement</p>
          <p>Reprise d'un projet existant pour corriger les bugs critiques et fiabiliser la solution utilisée par plusieurs services de police municipale.</p>
          
          <ul>
            <li>Développement en Java / XML pour Android</li>
            <li>Maintenance corrective et évolutive</li>
            <li>Coordination avec les fournisseurs hardware</li>
            <li>Rééquilibrage des priorités : bugs, nouvelles features, déploiement</li>
            <li>Interaction avec les parties prenantes et utilisateurs finaux</li>
          </ul>
        </div>
        
        <div>
          <p className="project-title">Développement d'Opsoweb</p>
          <p>Participation au développement d'une application métier web destinée aux polices municipales.</p>
          
          <ul>
            <li>Développement en Spring Boot et React</li>
            <li>Participation à la conception technique</li>
            <li>Encadrement d'alternants</li>
            <li>Suivi des tâches et coordination</li>
            <li>Collaboration étroite avec les équipes métier</li>
          </ul>
        </div>
      </>
    )
  },
  {
    id: 'exp3',
    company: 'Digital Express',
    logo: 'D',
    role: 'Freelance',
    period: 'Février 2023 - Décembre 2023',
    location: 'Aix-en-Provence, Provence-Alpes-Côte d\'Azur, France · À distance',
    richDescription: (
        <>
          <p className="project-title">Solution digitale pour un restaurant</p>
          <p>Conception et déploiement d'une solution sur mesure pour un client du secteur de la restauration...</p>
          <ul>
            <li>Environnement de prod/dev</li>
            <li>Docker</li>
            <li>Déploiement Ansible</li>
            <li>CI/CD</li>
            <li>React, TS, Node.js, Prisma, MySQL</li>
            <li>UI Library réutilisable</li>
            <li>Optimisation SEO</li>
          </ul>
        </>
    )
  },
  {
    id: 'exp4',
    company: 'Subclic',
    logo: 'S',
    role: 'Développeur Full Stack',
    period: 'Janvier 2023 - Décembre 2023',
    location: 'Marseille, Provence-Alpes-Côte d\'Azur, France',
    richDescription: (
      <>
        <div>
          <p className="project-title">Développement d'une API basée sur gRPC</p>
          <p>Création d'une API pour les développeurs d'un client, facilitant l'intégration des fonctionnalités de la plateforme et améliorant l'expérience utilisateur.</p>
          
          <ul>
            <li>Conception et développement d'une API publique robuste</li>
            <li>Développement en Ruby on Rails et gRPC</li>
            <li>Gestion d'une base de données complexe</li>
            <li>Compatibilité avec les systèmes existants</li>
            <li>Écriture de tests</li>
            <li>Bonne compréhension des besoins métiers</li>
          </ul>
        </div>
        
        <div>
          <p className="project-title">Maintenance d'une application legacy</p>
          <p>Correction de bugs et optimisation des performances pour améliorer la stabilité et l'efficacité de l'application.</p>
          
          <ul>
            <li>Développement en Ruby on Rails</li>
            <li>Debug et optimisation continue</li>
            <li>Intégration de nouvelles fonctionnalités</li>
          </ul>
        </div>
      </>
    )
  }
]; 