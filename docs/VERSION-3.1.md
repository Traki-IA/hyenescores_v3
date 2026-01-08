# HyeneScores v3.1 - Spécifications

> Documentation complète de la version 3.1 : Harmonisation Design System

**Status** : 🚧 En cours  
**Date début** : Janvier 2026  
**Objectif** : Cohérence visuelle complète sur les 4 pages

---

## 🎯 Objectifs Version 3.1

### Objectif Principal
**Harmonisation complète du design system** sur l'ensemble de l'application avec focus glassmorphism et cohérence couleurs.

### Objectifs Secondaires
1. Mobile-first systématique (390px viewport)
2. Maximum densité information sans scroll
3. Cohérence typographique (Rajdhani/Inter)
4. Animations/transitions fluides

---

## 📊 État d'Avancement Global

### Vue d'Ensemble
```
Panthéon    : ████████████████░░  80% ✅
Palmarès    : ████████░░░░░░░░░░  40% 🚧
Match       : ██████░░░░░░░░░░░░  30% 🚧
Classement  : ░░░░░░░░░░░░░░░░░░   0% ❌
```

### Priorités
1. **P1 - Critique** : Finir Panthéon (badge champion)
2. **P2 - Haute** : Pagination Palmarès
3. **P3 - Moyenne** : Refonte UI Match
4. **P4 - Basse** : Création Classement

---

## 🎨 Design System v3.1

### Changements vs v3.0

#### Nouveautés
- ✅ Glassmorphism systématique (tous composants)
- ✅ Cyan #00d9ff comme primaire unique
- ✅ Gold #fbbf24 exclusif aux champions
- ✅ Typographie stricte : Rajdhani (headers) + Inter (body)

#### Dépréciations
- ❌ Backgrounds opaques (bg-gray-900, etc.)
- ❌ Couleurs primaires multiples (bleus variés)
- ❌ Fonts alternatives
- ❌ Borders solides (remplacés par glassmorphism)

---

## 📄 Pages - Détails Implémentation

### 1. Panthéon (80% complet)

#### Fichier
`src/pages/Pantheon.tsx`

#### Fonctionnalités Implémentées
- ✅ Affichage classement historique
- ✅ Tri multi-critères (victoires, points, ratio)
- ✅ Glassmorphism cards managers
- ✅ Responsive 390px
- ✅ Typographie Rajdhani/Inter

#### En Cours
- 🚧 **Badge champion gold** (problème spécificité CSS)
  - Issue : `.champion-badge` écrasé par `.pantheon-card`
  - Solution : Augmenter spécificité ou utiliser `!important`
  - Fichier : `src/pages/Pantheon.tsx` ligne ~85

#### À Faire
- ⏳ Animations hover cards
- ⏳ Filtres par saison
- ⏳ Statistiques détaillées (modal)

---

### 2. Palmarès (40% complet)

#### Fichier
`src/pages/Palmares.tsx`

#### Fonctionnalités Implémentées
- ✅ Liste champions par saison
- ✅ Glassmorphism tableau
- ✅ Responsive layout

#### En Cours
- 🚧 **Pagination** (10 entrées par page)
  - Specs : Créer composant `PaginationControls`
  - Style : Glassmorphism cyan
  - Props : `totalItems`, `itemsPerPage`, `onPageChange`

#### À Faire
- ⏳ Statistiques champion par saison
- ⏳ Filtre recherche manager
- ⏳ Export données (CSV/PDF)

---

### 3. Match (30% complet)

#### Fichier
`src/pages/Match.tsx`

#### Fonctionnalités Implémentées
- ✅ Affichage matchs
- ✅ Résultats basiques

#### À Refondre Complètement
- ❌ UI non conforme design system v3.1
- ❌ Pas de glassmorphism
- ❌ Couleurs incohérentes
- ❌ Typographie mixte

#### Refonte Prévue
1. Redesign complet cards match
2. Glassmorphism sur tous éléments
3. Couleurs cyan/gold conformes
4. Ajout statistiques temps réel

---

### 4. Classement (0% implémenté)

#### Fichier
`src/pages/Classement.tsx` (à créer)

#### Spécifications
**Rôle** : Afficher classement de la saison en cours

**Données à Afficher**
- Position manager
- Nom manager
- Points totaux
- Matchs joués
- Victoires/défaites
- Ratio performance

**Design Requirements**
- Glassmorphism systématique
- Badge gold pour leader
- Responsive 390px
- Animations tri colonnes

**Priorité** : Basse (après finition 3 autres pages)

---

## 🎨 Design System - Spécifications Techniques

### Palette Couleurs

```css
/* === PRIMARY === */
--primary: #00d9ff;
/* Usage : CTA, liens, highlights, actifs */

/* === HIERARCHY === */
--hierarchy: #fbbf24;
/* Usage : UNIQUEMENT champions 1ère place */

/* === STATUS === */
--positive: #10b981; /* Victoires, gains */
--negative: #ef4444; /* Défaites, pertes */

/* === BACKGROUNDS === */
--background: #000000; /* Page background */
--surface: rgba(255, 255, 255, 0.05); /* Glassmorphism */
```

### Typographie

```css
/* Headers (Tous titres, labels importants) */
font-family: 'Rajdhani', sans-serif;
font-weight: 700;
letter-spacing: 0.05em;

/* Body (Textes, données, descriptions) */
font-family: 'Inter', sans-serif;
font-weight: 400; /* Regular */
font-weight: 600; /* Semibold pour emphasis */
```

### Glassmorphism Pattern

```css
/* Standard (défaut) */
.glassmorphism {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* TailwindCSS */
.className {
  @apply backdrop-blur-md bg-white/5 border border-white/10;
}
```

**Variantes :**
- Léger : `backdrop-blur-sm bg-white/5` (éléments subtils)
- Standard : `backdrop-blur-md bg-white/5` (défaut)
- Fort : `backdrop-blur-lg bg-white/10` (modals, overlays)

---

## 📱 Responsive Breakpoints

```css
/* Mobile (Priorité #1) */
@media (min-width: 390px) { ... }

/* Tablet */
sm: 640px
md: 768px

/* Desktop */
lg: 1024px
xl: 1280px
2xl: 1536px
```

**Stratégie** :
1. Design d'abord pour 390px
2. Adapte progressivement vers desktop
3. Toute information visible sans scroll (mobile)

---

## ✅ Checklist Implémentation v3.1

### Panthéon
- [x] Glassmorphism cards
- [x] Couleurs conformes (cyan)
- [x] Typographie Rajdhani/Inter
- [x] Responsive 390px
- [ ] Badge champion gold (en cours)
- [ ] Animations hover
- [ ] Filtres saison
- [ ] Stats détaillées modal

### Palmarès
- [x] Glassmorphism tableau
- [x] Liste champions
- [x] Responsive base
- [ ] Pagination (10/page)
- [ ] Filtre recherche
- [ ] Stats champion détaillées
- [ ] Export données

### Match
- [ ] Refonte UI complète
- [ ] Glassmorphism cards match
- [ ] Couleurs cyan/gold
- [ ] Typographie conforme
- [ ] Responsive 390px
- [ ] Stats temps réel
- [ ] Filtres dates/managers

### Classement
- [ ] Création page from scratch
- [ ] Structure tableau
- [ ] Glassmorphism
- [ ] Badge gold leader
- [ ] Responsive 390px
- [ ] Tri colonnes
- [ ] Animations

---

## 🐛 Bugs Connus v3.1

### Critique (P1)
1. **Badge champion Panthéon non visible**
   - Fichier : `Pantheon.tsx` ligne ~85
   - Cause : Spécificité CSS
   - Fix : Ajouter `!important` ou augmenter spécificité

### Haute (P2)
*Aucun actuellement*

### Moyenne (P3)
*Aucun actuellement*

---

## 📋 Tâches Créées

### Complétées
*Aucune encore*

### En Cours
- **TASK-001** : Badge champion Panthéon
- **TASK-002** : Pagination Palmarès

### À Créer
- Refonte UI Match
- Filtres Panthéon
- Stats détaillées
- Page Classement

---

## 🔗 Références

### Documentation
- Design System complet : `DESIGN-SYSTEM.md`
- Architecture : `ARCHITECTURE.md`
- Quick Start : `QUICK-START.md`

### Templates
- Nouvelle feature : `.claude/tasks/new-feature.md`
- Bug fix : `.claude/tasks/bug-fix.md`
- UI update : `.claude/tasks/ui-update.md`

---

## 📝 Notes Version

### Décisions Importantes

1. **Glassmorphism systématique**
   - Choix : Remplacer tous backgrounds opaques
   - Raison : Cohérence visuelle + modernité
   - Impact : Refonte complète Match page

2. **Cyan unique comme primaire**
   - Choix : #00d9ff exclusif
   - Raison : Identité visuelle forte
   - Impact : Suppression autres bleus

3. **Gold réservé aux champions**
   - Choix : #fbbf24 uniquement 1ère place
   - Raison : Hiérarchie claire
   - Impact : Attention utilisation

### Leçons Apprises

1. **Spécificité CSS critique**
   - Problème récurrent avec badges
   - Solution : Documenter règles spécificité

2. **Mobile-first essentiel**
   - Desktop-first = refactoring lourd
   - Mobile-first = scale-up naturel

3. **Données réelles obligatoires**
   - Mocks = layout bugs cachés
   - Réelles = problèmes visibles early

---

**Version** : 3.1.0  
**Dernière mise à jour** : Janvier 2026  
**Status** : 🚧 En développement actif
