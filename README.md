# Chronos Voyages - Agence de Voyage Temporel de Luxe

Une page d'accueil premium et cinématique pour une agence fictive de voyage dans le temps de luxe. Construite avec Next.js 16, Tailwind CSS 4 et le SDK Vercel AI.

## Aperçu

Chronos Voyages est une page d'accueil thématisée sombre et visuellement immersive qui invite les utilisateurs à explorer trois destinations emblématiques à travers le temps : **Paris 1889**, l'**Ère Crétacée** et **Florence 1504**. Le site combine des effets de glassmorphism, des accents dorés, une typographie serif audacieuse et des animations interactives pour offrir une expérience utilisateur haut de gamme et cinématique.

**Lien du site :** https://v0-luxury-time-travel-page.vercel.app

## Fonctionnalités Principales

- **Section Héros** : Héros cinématique plein écran avec particules dorées flottantes animées et une superposition de grille subtile.
- **Cartes de Destination** : Trois cartes interactives avec des œuvres d'art personnalisées pour chaque ère, effets de lueur dorée au survol et animations de révélation au défilement.
- **Quiz de Destination** : Un quiz interactif de 4 questions pour recommander la destination idéale, avec transitions animées et une barre de progression dorée.
- **Section Expérience** : Cartes de fonctionnalités avec style glassmorphism mettant en avant la sécurité temporelle, les historiens experts, la précision quantique et les hébergements de luxe.
- **Chatbot IA (Concierge Temporel)** : Bulle flottante dorée avec interface de chat complète, alimentée par Mistral AI via le SDK Vercel AI.
- **Navigation** : Barre de navigation fixe minimaliste avec menu hamburger responsive.
- **Pied de Page** : Formulaire d'inscription à la newsletter et liens de navigation.

## Pile Technologique

- **Next.js 16** : Framework React (App Router)
- **React 19** : Bibliothèque UI
- **Tailwind CSS 4** : Stylisation utilitaire
- **shadcn/ui** : Bibliothèque de composants UI (basée sur Radix)
- **SDK Vercel AI 6** : Streaming et gestion de chat IA
- **@ai-sdk/mistral** : Fournisseur Mistral AI pour le chatbot
- **Lucide React** : Bibliothèque d'icônes
- **Playfair Display** : Police serif pour les titres
- **Inter** : Police sans-serif pour le corps du texte

## Structure du Projet

```
app/
  layout.tsx              # Mise en page racine avec polices et métadonnées
  page.tsx                # Page d'accueil principale assemblant toutes les sections
  globals.css             # Jetons de thème, animations, barre de défilement personnalisée
  api/chat/route.ts       # Route API du chatbot IA (streaming Mistral AI)

components/
  navbar.tsx              # Barre de navigation fixe avec menu mobile
  hero-section.tsx        # Section héros plein écran avec particules et animations
  destination-cards.tsx   # Trois cartes de destination interactives avec effets de lueur
  destination-quiz.tsx    # Quiz interactif de 4 questions avec recommandation de résultat
  experience-section.tsx  # Cartes de fonctionnalités avec style glassmorphism
  footer.tsx              # Pied de page avec inscription à la newsletter
  chatbot-bubble.tsx      # Chatbot IA flottant avec interface de chat en streaming
  ui/                     # Bibliothèque de composants shadcn/ui

public/images/            # Images des destinations
```

## Démarrage

### Prérequis
- Node.js 18+
- pnpm

### Installation
```bash
pnpm install
```

### Développement
```bash
pnpm dev
```
L'application sera disponible sur `https://v0-luxury-time-travel-page.vercel.app`.

### Construction
```bash
pnpm build
pnpm start
```

## Variables d'Environnement
- `MISTRAL_API_KEY` : Clé API pour le chatbot Mistral AI (non inclus)

## Déploiement
Ce projet est optimisé pour le déploiement sur [Vercel](https://vercel.com). Connectez votre dépôt et définissez la variable d'environnement `MISTRAL_API_KEY` dans les paramètres de votre projet.

## Outils IA Utilisés
Pour assurer la transparence, voici les outils et modèles d'IA utilisés dans ce projet :

- **Modèle de langage** : Mistral AI (`mistral-small-latest`) - Utilisé pour le chatbot concierge temporel, fournissant des réponses conversationnelles sur les destinations de voyage dans le temps.
- **SDK** : Vercel AI SDK 6 - Gère le streaming en temps réel et l'interface de chat.
- **Fournisseur** : @ai-sdk/mistral - Intègre Mistral AI dans l'application Next.js.

Le chatbot est configuré avec un prompt système donnant au modèle la persona d'un concierge de luxe spécialisé dans les voyages temporels.

## Crédits
- **APIs et Modèles IA** : Mistral AI (modèle `mistral-small-latest`) via le SDK Vercel AI. Merci à Mistral AI pour leur modèle open-source et à Vercel pour leur SDK facilitant l'intégration.
- **Assets** : Les images des destinations (Paris 1889, Ère Crétacée, Florence 1504) sont des œuvres d'art personnalisées créées pour ce projet. Icônes fournies par Lucide React.
- **Bibliothèques et Frameworks** : Basé sur Next.js, React, Tailwind CSS, et shadcn/ui. Polices : Playfair Display et Inter de Google Fonts.
- **Inspiration** : Concept inspiré par les thèmes de science-fiction de voyages temporels et d'expériences de luxe.

## Licence
Ce projet est destiné à des fins de démonstration et éducatives.
