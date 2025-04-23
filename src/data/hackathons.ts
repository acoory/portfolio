import { Hackathon } from '../types/types';

export const hackathons: Hackathon[] = [
  {
    id: 'hackathon1',
    name: 'AWS Cloud Challenge',
    logo: 'A',
    displayName: '',
    period: 'Fév 2025',
    location: 'Aix-en-Provence, France',
    description: 'Participation à un challenge de 48h pour concevoir une architecture cloud hautement disponible et scalable sur AWS, en utilisant des services comme EC2, Lambda, S3 et RDS.'
  },
  {
    id: 'hackathon2',
    name: 'Kuberquest',
    logo: 'C',
    displayName: '',
    period: 'Jan 2025 - Avril 2025',
    location: 'Aix-en-Provence, France',
    description: 'Création d\'un pipeline CI/CD complet pour déployer une application microservices sur Kubernetes avec GitLab CI, intégrant les tests automatisés, la sécurité et le monitoring.'
  }
]; 