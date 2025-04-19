import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'Projet 1',
    period: 'Jan 2023 - Mars 2023',
    description: 'Avec la sortie du OpenAI GPT Store, j\'ai décidé de construire un SaaS qui permet aux utilisateurs de collecter des adresses email de leurs utilisateurs GPT.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    websiteUrl: 'https://exemple.com'
  },
  {
    id: 'project2',
    title: 'Projet 2',
    period: 'Juin 2022 - Présent',
    description: 'Conception, développement et vente de composants UI animés pour les développeurs.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Stripe'],
    websiteUrl: 'https://exemple.com',
    sourceUrl: 'https://github.com/exemple'
  },
  {
    id: 'project3',
    title: 'Projet 3',
    period: 'Avril 2022 - Sept 2022',
    description: 'Développement d\'une plateforme open-source de logging et d\'analyse pour OpenAI.',
    technologies: ['React', 'TypeScript', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
    websiteUrl: 'https://exemple.com',
    sourceUrl: 'https://github.com/exemple'
  }
]; 