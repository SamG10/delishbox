# Delish'Box Frontend

Application frontend React pour Delish'Box, une startup qui propose des kits de recettes par abonnement.

## 🚀 Technologies utilisées

- React.js (Create React App)
- JavaScript
- Bootstrap 5
- react-i18next (FR/EN)
- Google Tag Manager (GA4)
- Cookiebot (RGPD)

## 📋 Prérequis

- Node.js (v14 ou supérieur)
- npm (v6 ou supérieur)

## 🛠️ Installation

1. Cloner le repository :

```bash
git clone https://github.com/votre-username/delishbox.git
cd delishbox/delishbox-front
```

2. Installer les dépendances :

```bash
npm install
```

3. Créer un fichier `.env` à la racine du projet avec les variables d'environnement suivantes :

```env
VITE_GTM_ID=votre-id-gtm
VITE_GA4_ID=votre-id-ga4
VITE_COOKIEBOT_ID=votre-id-cookiebot
VITE_API_URL=http://localhost:3000/api
```

## 🚀 Démarrage

Pour lancer l'application en mode développement :

```bash
npm run dev
```

Pour construire l'application pour la production :

```bash
npm run build
```

Pour prévisualiser la version de production :

```bash
npm run preview
```

## 📁 Structure du projet

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

## 🌍 Internationalisation

L'application est disponible en français et en anglais. Les traductions sont gérées via `react-i18next` et se trouvent dans le fichier `src/i18n.js`.

## 📈 Analytics

L'application utilise Google Tag Manager pour le tracking avec GA4. Les événements suivants sont trackés :

- `click_subscribe_cta`
- `scroll_kit_50`
- `blog_article_view`
- `click_add_to_cart`
- `form_submit_contact`
- `time_on_blog_30s`
- `language_switch_to_fr` / `language_switch_to_en`

## 🔒 RGPD

L'application utilise Cookiebot pour la gestion des cookies et le respect du RGPD. Aucun tracking n'est effectué sans le consentement de l'utilisateur.

## 🎨 UI/UX

L'interface utilisateur est construite avec Bootstrap 5 et inclut :

- Design responsive
- Animations fluides
- Support du mode sombre
- Accessibilité (ARIA, contraste, navigation au clavier)

## 📱 Pages

- `/` → Accueil avec Hero section et CTA
- `/kits` → Liste des kits
- `/kit/:slug` → Détail d'un kit
- `/abonnement` → Offres d'abonnement
- `/contact` → Formulaire de contact
- `/blog` → Liste des articles
- `/blog/:slug` → Page article

## 🤝 Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
