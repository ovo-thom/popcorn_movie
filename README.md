# 🎬 PopCorn Movie

Une application web moderne pour découvrir et gérer vos films favoris, alimentée par l'API TMDB.

## ✨ Fonctionnalités

- 🔍 **Recherche en temps réel** avec debounce pour une expérience fluide
- ❤️ **Système de favoris** avec persistance dans le localStorage
- 🎯 **Recherche avancée** par genre, année et options de tri
- 📱 **Design responsive** adapté à tous les écrans
- 🎠 **Carrousel automatique** des films en cours de diffusion
- 🎭 **Pages détaillées** pour chaque film avec informations complètes
- 🎨 **Interface moderne** avec animations et effets visuels

## 🛠️ Technologies utilisées

- **Next.js 13+** avec App Router
- **React** (Hooks, Context API)
- **Tailwind CSS** pour le styling
- **API TMDB** pour les données des films
- **Swiper.js** pour les carrousels
- **React Icons** pour les icônes

## 🚀 Installation et utilisation

1. **Cloner le projet**

```bash
git clone https://github.com/ovo-thom/popcorn_movie
cd popcorn-movie
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configuration de l'API**

- Créez un compte sur [TMDB](https://www.themoviedb.org/settings/api)
- Obtenez votre clé API
- Créez un fichier `.env.local` à la racine :

```bash
NEXT_PUBLIC_TMDB_API_KEY=votre_clé_api_ici
```

4. **Lancer en développement**

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du projet

```
src/
├── app/                 # Pages Next.js (App Router)
│   ├── favorites/       # Page des favoris
│   ├── popular/         # Films populaires
│   └── movie/           # Détails des films
├── components/          # Composants réutilisables
│   ├── MovieCard.jsx    # Carte de film
│   ├── Header.jsx       # En-tête avec recherche
│   └── ...
├── contexts/            # Context React
│   └── FavoritesContext.jsx
└── lib/                 # Utilitaires et API
    └── tmdb.js          # Fonctions API TMDB
```

## 🎯 Fonctionnalités détaillées

### Recherche

- Recherche instantanée avec debounce (300ms)
- Dropdown avec aperçu des résultats
- Recherche avancée multi-critères

### Favoris

- Ajout/suppression d'un clic
- Persistance locale (localStorage)
- Page dédiée avec gestion des états vides

### Interface

- Design sombre moderne
- Animations fluides (hover, scale, rotation)
- Grilles responsives adaptatives
- Carrousel automatique avec navigation

## 🌐 Demo

[Lien vers la démo en ligne] (à ajouter après déploiement)

## 📸 Screenshots

[Ajouter des captures d'écran de votre application]

## 🔄 Scripts disponibles

```bash
npm run dev      # Développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification du code
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou un pull request.

## 📄 License

Ce projet est sous licence MIT.

---

Développé avec ❤️ et beaucoup de ☕
