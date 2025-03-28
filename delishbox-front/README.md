# Delish'Box Frontend

Application frontend React pour Delish'Box, une startup qui propose des kits de recettes par abonnement.

## 🚀 Stack Technique

### Technologies principales

- React.js (Create React App)
- JavaScript
- Bootstrap 5
- react-i18next (FR/EN)
- Google Tag Manager (GA4)
- Cookiebot (RGPD)

### Outils de développement

- Node.js (v14 ou supérieur)
- npm (v6 ou supérieur)
- ESLint
- Prettier

## 📋 Installation

1. Cloner le repository :

```bash
git clone https://github.com/votre-username/delishbox.git
cd delishbox/delishbox-front
```

2. Installer les dépendances :

```bash
npm install
```

3. Configurer les variables d'environnement :

```env
VITE_GTM_ID=votre-id-gtm
VITE_GA4_ID=votre-id-ga4
VITE_COOKIEBOT_ID=votre-id-cookiebot
VITE_API_URL=http://localhost:3000/api
```

## 🗺️ Plan du Site

### Pages principales

- `/` → Page d'accueil

  - Hero section avec CTA principal
  - Présentation des kits populaires
  - Témoignages clients
  - FAQ

- `/kits` → Catalogue des kits

  - Filtres par catégorie
  - Système de recherche
  - Tri par popularité/prix

- `/kit/:slug` → Détail d'un kit

  - Description détaillée
  - Liste des ingrédients
  - Instructions de préparation
  - Avis clients

- `/abonnement` → Offres d'abonnement

  - Différents forfaits
  - Comparateur de prix
  - FAQ spécifique

- `/contact` → Formulaire de contact

  - Formulaire de contact
  - Informations de contact
  - FAQ

- `/blog` → Blog culinaire

  - Liste des articles
  - Catégories
  - Recherche

- `/blog/:slug` → Page article
  - Contenu de l'article
  - Articles similaires
  - Partage social

## 📊 Événements Suivis

### Événements de conversion

- `subscribe_plan` → Sélection d'un plan d'abonnement

  ```javascript
  {
    event: 'subscribe_plan',
    id: string,
    name: string,
    price: number,
    description: string,
    features: array
  }
  ```

- `contact_form_submit` → Soumission du formulaire de contact
  ```javascript
  {
    event: 'contact_form_submit',
    name: string,
    email: string,
    message: string,
    consent: boolean
  }
  ```

### Événements d'engagement

- `language_switch_to_fr` → Changement de langue vers le français
- `language_switch_to_en` → Changement de langue vers l'anglais

### Configuration Analytics

- Google Tag Manager
- Google Analytics 4
- Cookiebot

## 🔒 Conformité RGPD

### Gestion des cookies

- Utilisation de Cookiebot pour la gestion des consentements
- Catégories de cookies :
  - Nécessaires (toujours actifs)
  - Préférences
  - Statistiques
  - Marketing

### Collecte de données

- Données collectées :
  - Informations de contact (formulaires)
  - Données de navigation (avec consentement)
  - Préférences utilisateur

### Droits des utilisateurs

- Droit d'accès aux données
- Droit de rectification
- Droit à l'effacement
- Droit d'opposition
- Droit à la portabilité

## 💡 Retour d'Expérience

### Points forts

- Interface intuitive et responsive
- Performance optimisée
- Support multilingue
- Analytics avancés
- Conformité RGPD

### Améliorations futures

- PWA (Progressive Web App)
- Optimisation des performances
- Enrichissement des analytics
- Nouvelles fonctionnalités de personnalisation

## 🛠️ Démarrage

### Mode développement

```bash
npm run dev
```

### Build production

```bash
npm run build
```

### Prévisualisation production

```bash
npm run preview
```

## 📁 Structure du Projet

```
delishbox-front/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   ├── i18n.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
