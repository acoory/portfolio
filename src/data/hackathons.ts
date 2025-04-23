import { Hackathon } from '../types/types';

export const hackathons: Hackathon[] = [
  {
    id: 'hackathon1',
    name: 'AWS Cloud Challenge',
    logo: 'A',
    displayName: 'AWS Cloud Challenge',
    period: 'Mars 2024',
    location: 'Paris, France',
    description: 'Participation à un challenge de 48h pour concevoir une architecture cloud hautement disponible et scalable sur AWS, en utilisant des services comme EC2, Lambda, S3 et RDS.'
  },
  {
    id: 'hackathon2',
    name: 'DevOps Days',
    logo: 'D',
    displayName: 'DevOps Days',
    period: 'Septembre 2023',
    location: 'Marseille, France',
    description: 'Création d\'un pipeline CI/CD complet pour déployer une application microservices sur Kubernetes avec GitLab CI, intégrant les tests automatisés, la sécurité et le monitoring.'
  },
  {
    id: 'hackathon3',
    name: 'API Hackathon',
    logo: 'A',
    displayName: 'API Hackathon',
    period: 'Mai 2023',
    location: 'Lyon, France',
    description: 'Développement d\'une API REST/GraphQL performante pour interconnecter plusieurs services existants, avec un focus sur la performance et la documentation.'
  }
]; 