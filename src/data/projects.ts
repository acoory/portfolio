import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'Application de Vidéosurveillance IA',
    period: 'Août 2024 - Présent',
    description: 'Application de vidéosurveillance intelligente pour entreprises, connectée à un moteur d\'IA détectant des incidents critiques (intrusions, incendies, comportements anormaux). Architecture distribuée, temps réel et hautement résiliente.',
    technologies: ['Spring Boot', 'Go', 'Flask', 'React Native', 'PostgreSQL', 'Redis', 'AWS'],
    websiteUrl: 'https://igaar.fr'
  },
  {
    id: 'project2',
    title: 'Opsoweb',
    period: 'Décembre 2023 - Présent',
    description: 'Application métier web destinée aux polices municipales, permettant la gestion des opérations et le suivi des interventions.',
    technologies: ['Spring Boot', 'React', 'Java', 'TypeScript'],
    websiteUrl: 'https://hexacoffre.fr'
  },
  {
    id: 'project3',
    title: 'API gRPC pour Plateforme Existante',
    period: 'Janvier 2023 - Décembre 2023',
    description: 'Développement d\'une API basée sur gRPC pour les développeurs d\'un client, facilitant l\'intégration des fonctionnalités de la plateforme existante et améliorant l\'expérience utilisateur.',
    technologies: ['Ruby on Rails', 'gRPC', 'PostgreSQL'],
    websiteUrl: 'https://subclic.com'
  },
  {
    id: 'project4',
    title: 'Solution Digitale pour Restauration',
    period: 'Février 2023 - Décembre 2023',
    description: 'Conception et déploiement d\'une solution sur mesure pour un client du secteur de la restauration, visant à digitaliser ses opérations et améliorer son image en ligne.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'MySQL', 'Docker', 'Ansible'],
    websiteUrl: 'https://digital-express.fr'
  }
]; 