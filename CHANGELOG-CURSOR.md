# CHANGELOG - CURSOR

## 11 juillet 2024

### Fichiers modifiés
- `src/App.css`

### Changements apportés
- Modification de la couleur des cartes en mode sombre
  - Remplacement de `--card-dark: #1f2937;` par `--card-dark: #181825;`
  - La nouvelle couleur est plus foncée et comporte une légère teinte indigo/violet
  - Cette modification assure une meilleure harmonisation avec le fond dégradé de l'application et les couleurs d'accentuation

- Harmonisation des couleurs de la navbar avec le reste de l'application
  - Modification de l'arrière-plan pour utiliser la même palette de couleurs que la barre de navigation du haut
  - Utilisation des variables CSS existantes pour les couleurs de texte et les effets
  - Ajout d'une bordure légère cohérente avec le reste de l'interface
  - Amélioration de l'effet de survol sur les icônes (ombre plus prononcée, élévation accrue)
  - Correction des sélecteurs pour respecter la structure des classes de l'application

Ces changements renforcent la cohérence visuelle dans toute l'application, particulièrement en mode sombre, où les cartes et la barre de navigation suivent désormais la même charte graphique que les autres éléments de l'interface.

## 2023-07-04

### Fichiers modifiés
- `src/App.css`

### Changements apportés
- Harmonisation des styles entre les barres de navigation (haut et bas)
- Ajout de l'effet blur (backdrop-filter) sur la navbar du bas
- Amélioration de la cohérence visuelle entre les modes clair et sombre
- Standardisation de la taille des éléments et des espacements
- Ajout de styles pour les icônes et les états actifs dans la navbar
- Utilisation de la variable `--container-width` pour une meilleure cohérence
- Ajustement des effets de survol et des animations pour une expérience utilisateur plus fluide

## 2023-07-01

### Modifications apportées

#### src/App.css
- Réparation du style `:hover` sur les icônes de navigation qui avait été supprimé
- Ajout d'un effet de transformation et d'ombre au survol des icônes pour améliorer l'expérience utilisateur
- Ajout d'un effet de changement de couleur au survol pour une meilleure rétroaction visuelle

### Résumé des améliorations
Les modifications apportées rétablissent l'effet de survol sur les icônes de la barre de navigation, ce qui améliore l'interaction utilisateur et rend l'interface plus intuitive. L'ajout d'effets visuels (transformation, ombre, changement de couleur) renforce le feedback visuel lorsque l'utilisateur interagit avec les éléments de navigation.