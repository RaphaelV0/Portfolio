# 🌐 Portfolio de Raphaël Verchain

Ce portfolio personnel présente mon profil, mes compétences et mes projets de manière interactive et élégante. Construit avec **Next.js**, **Tailwind CSS** et **Framer Motion**, il offre une expérience moderne, responsive et animée.

---

## 🛠️ Technologies utilisées

- **Next.js** – Framework React avec rendu côté serveur
- **Tailwind CSS** – Framework CSS utilitaire
- **Framer Motion** – Bibliothèque d'animations pour React
- **React Icons** – Collection d'icônes populaires
- **TypeScript** – Typage statique pour JavaScript

---

## 🔍 Fonctionnalités

- 🎨 **Design moderne et responsive** – Adapté aux mobiles, tablettes et ordinateurs
- 🖱️ **Fond interactif** – Réagit aux mouvements de la souris
- 🌀 **Animations fluides** – Transitions entre les sections
- 🌙 **Mode sombre natif** – Optimisé pour le confort visuel
- 🔗 **Navigation intuitive** – Surlignage automatique des sections actives
- 🕒 **Timeline dynamique** – Expériences présentées chronologiquement
- 💼 **Galerie de projets** – Visualisation claire des réalisations
- 📬 **Formulaire de contact** – Copie de l'adresse email et téléchargement du CV

---

## 🚀 Installation

```bash
# 1. Cloner le repository
git clone https://github.com/ton-utilisateur/portfolio.git
cd portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir dans le navigateur
http://localhost:3000
```
---

## 📂 Structure du projet

├── app/
│   ├── layout.tsx            # Layout principal
│   ├── page.tsx              # Page d'accueil
│   └── globals.css           # Styles globaux
├── components/
│   ├── AnimatedText.tsx      # Texte animé
│   ├── Avatar.tsx            # Avatar ou photo
│   ├── Contact.tsx           # Section contact
│   ├── Experience.tsx        # Timeline
│   ├── Footer.tsx            # Pied de page
│   ├── Hero.tsx              # Accueil
│   ├── NavBar.tsx            # Navigation
│   ├── Projects.tsx          # Projets
│   ├── Skills.tsx            # Compétences
│   └── SocialLink.tsx        # Réseaux sociaux
├── public/
│   ├── CV_Raphael_Verchain.pdf  # CV
│   └── Projet/                 # Images
├── package.json
└── README.md



---

## 🎨 Design et choix techniques

### Thème visuel
- **Palette de couleurs** : Dégradés violet / bleu / turquoise sur fond sombre
- **Typographie** : [Geist](https://vercel.com/font) pour une lisibilité optimale
- **Éléments visuels** : Formes géométriques, animations discrètes

### Performance
- ✅ Optimisation des images
- ⏳ Chargement différé (lazy loading)
- 🚀 Animations optimisées

### Architecture
- 🧩 Composants modulaires
- 🔍 Séparation UI / logique / données
- ✅ Typage strict avec TypeScript

---

## 📱 Responsive Design

Le portfolio est compatible avec tous les formats :

- 📱 **Mobile** : Affichage fluide
- 📱 **Tablette** : Grille et navigation adaptatives
- 🖥️ **Desktop** : Expérience complète

---

## 🔄 Évolutions futures

- [ ] Mode multilingue (français / anglais)
- [ ] Section blog avec articles techniques
- [ ] Intégration de statistiques GitHub
- [ ] Accessibilité renforcée (ARIA, contrastes)

---

## 📚 Documentation des composants

### `Hero.tsx`
Section d’introduction avec appel à l’action.
- Props : `mousePosition`
- Fonctionnalités : Animation de texte, bouton CTA, indicateur de scroll

### `NavBar.tsx`
Barre de navigation responsive.
- État local : section active, menu mobile
- Fonctionnalités : surlignage dynamique, scroll fluide

### `Skills.tsx`
Présentation des compétences techniques.
- Props : `mousePosition`
- Structure : cartes avec icône, description, tags

### `Experience.tsx`
Timeline des expériences.
- Fonctionnalités :
  - Tri chronologique
  - Filtrage
  - Détails repliables
  - Animation gauche/droite alternée

### `Projects.tsx`
Galerie de projets.
- Structure : cartes avec image, description, tech, liens
- Effets : zoom et overlay au survol

### `Contact.tsx`
Zone de contact.
- Fonctionnalités :
  - Copie automatique de l’email
  - Téléchargement du CV
  - Notifications intégrées

### Composants communs
- Titre animé avec dégradé
- Animation à l’entrée dans le viewport
- Arrière-plans et overlays harmonisés

---

## 📄 Licence

Ce projet est sous licence MIT.  
Voir le fichier `LICENSE` pour plus de détails.

---

## 👨‍💻 Créé avec ❤️ par [Raphaël Verchain](https://github.com/raphaelv0)
