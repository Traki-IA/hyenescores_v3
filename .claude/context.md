# HyeneScores - Contexte Auto-chargé (Claude Code)

> Ce fichier est automatiquement chargé par Claude Code à chaque session.
> Taille optimisée : ~150 lignes pour chargement instantané (0 tokens).

---

## 🎯 Vue d'Ensemble du Projet

**HyeneScores** est une application web de gestion pour la "Ligue des Hyènes", une ligue de fantasy football privée.

### Caractéristiques Principales
- **11 managers** actifs
- **Multi-championnats** : France (Ligue 1), Espagne (LaLiga), Italie (Serie A), Angleterre (Premier League)
- **Historique multi-saisons** : Données archivées depuis plusieurs années
- **4 pages principales** : Panthéon, Palmarès, Match, Classement

---

## 🛠️ Stack Technique

### Frontend
- **React** 18.3.1
- **TypeScript** 5.8.3
- **Vite** 5.4.19 (build tool)

### UI/Styling
- **TailwindCSS** 3.4.17
- **shadcn/ui** (composants)
- **Lucide React** 0.462.0 (icônes)

### State & Data
- **React Query** (@tanstack/react-query 5.83.0)
- **React Hook Form** 7.61.1
- **Zod** 3.25.76 (validation)

### Routing
- **React Router DOM** 6.30.1

### Déploiement
- **Vercel** (production automatique via GitHub)
- **Repository** : https://github.com/Traknar-87/hyenescores_v3

---

## 🎨 Design System

### Palette de Couleurs

#### Primaire
```css
--primary: #00d9ff (cyan électrique)
```
**Usage** : CTA, liens, highlights, bordures actives

#### Hiérarchie
```css
--hierarchy: #fbbf24 (gold/orange)
```
**Usage** : Champions (1ère place), badges distinction, éléments premium

#### Statuts
```css
--positive: #10b981 (green)
--negative: #ef4444 (red)
```
**Usage** : Indicateurs performance (victoires/défaites, gains/pertes)

#### Backgrounds
```css
--background: #000000 (black pur)
--surface: rgba(255, 255, 255, 0.05) (glassmorphism)
```

---

### Typographie

#### Headers (Rajdhani)
```css
font-family: 'Rajdhani', sans-serif;
font-weight: 700 (Bold);
```
**Usage** : Tous les titres (h1, h2, h3), noms de pages, labels importants

#### Body (Inter)
```css
font-family: 'Inter', sans-serif;
font-weight: 400 (Regular) | 600 (Semibold)
```
**Usage** : Textes courants, données, descriptions

---

### Pattern Glassmorphism

**Appliqué systématiquement sur tous les composants UI :**

```css
.glassmorphism {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

**Variantes** :
- `backdrop-blur-sm` (4px) : Léger
- `backdrop-blur-md` (12px) : Standard ✅ (par défaut)
- `backdrop-blur-lg` (24px) : Fort (modals, overlays)

---

## 📱 Contraintes Responsive

### Mobile-First
- **Viewport de référence** : 390px (iPhone standard)
- **Stratégie** : Toute l'information doit tenir sans scroll vertical
- **Approche** : Maximum densité d'information, optimisation espace

### Breakpoints
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

---

## 📂 Structure du Projet

### Arborescence Simplifiée
```
hyenescores_v3/
├── src/
│   ├── pages/
│   │   ├── Pantheon.tsx (80% implémenté)
│   │   ├── Palmares.tsx (40% implémenté)
│   │   ├── Match.tsx (30% implémenté)
│   │   └── Classement.tsx (0% implémenté)
│   ├── components/
│   │   └── ui/ (shadcn/ui)
│   ├── hooks/
│   ├── lib/
│   └── index.css (styles globaux)
│
├── docs/
│   ├── QUICK-START.md (guide complet)
│   ├── DESIGN-SYSTEM.md (specs visuelles)
│   ├── VERSION-3.1.md (specs version actuelle)
│   ├── ARCHITECTURE.md (structure technique)
│   └── tasks/ (specs features)
│
└── .claude/
    ├── context.md (ce fichier)
    └── tasks/ (templates)
```

---

## 🎯 Version Actuelle : 3.1

### Objectif Principal
**Harmonisation complète du design system** sur les 4 pages principales.

### État d'Avancement
- ✅ **Panthéon** : 80% (badge champion en cours)
- 🚧 **Palmarès** : 40% (pagination à ajouter)
- 🚧 **Match** : 30% (UI à refondre)
- ❌ **Classement** : 0% (à créer)

### Focus Actuel
- Glassmorphism systématique
- Cohérence couleurs (cyan/gold)
- Responsive 390px optimisé

---

## 📋 Commandes Rapides

### Développement Local
```bash
npm run dev        # Démarrer serveur développement
npm run build      # Build production
npm run preview    # Preview build
```

### Git Workflow
```bash
git add .
git commit -m "feat: description"
git push origin main
# → Vercel redéploie automatiquement
```

---

## 🔗 Liens Utiles

### Documentation Complète
- **Guide démarrage** : `docs/QUICK-START.md`
- **Design system** : `docs/DESIGN-SYSTEM.md`
- **Specs v3.1** : `docs/VERSION-3.1.md`
- **Architecture** : `docs/ARCHITECTURE.md`

### Templates Tâches
- **Bug fix** : `.claude/tasks/bug-fix.md`
- **Nouvelle feature** : `.claude/tasks/new-feature.md`
- **Modification UI** : `.claude/tasks/ui-update.md`

### Déploiement
- **Production** : https://hyenescores-v3.vercel.app (à mettre à jour)
- **Repository** : https://github.com/Traknar-87/hyenescores_v3

---

## ⚡ Règles de Développement

### 1. Design System STRICT
- ✅ Toujours utiliser cyan (#00d9ff) pour primaire
- ✅ Gold (#fbbf24) exclusivement pour champions
- ✅ Glassmorphism sur TOUS les composants
- ✅ Rajdhani pour headers, Inter pour body

### 2. Mobile-First TOUJOURS
- ✅ Tester d'abord sur 390px
- ✅ Pas de scroll vertical si possible
- ✅ Maximum densité information

### 3. Qualité Code
- ✅ TypeScript strict
- ✅ Composants réutilisables
- ✅ Props typées avec interfaces
- ✅ Pas de `any`

---

## 📝 Notes Importantes

### Données Réelles
- Ne PAS utiliser de données mockées/placeholder
- Toujours tester avec données réelles Supabase
- Valider layouts avec vrais noms (ex: "Traknar_87", pas "User 1")

### Glassmorphism
- Appliquer SYSTÉMATIQUEMENT
- Pattern : `backdrop-blur-md bg-white/5 border border-white/10`
- Variantes selon contexte (cards, modals, overlays)

### Champions (1ère place)
- Badge gold obligatoire
- Attention spécificité CSS (problème récurrent)
- Vérifier toujours l'affichage visuel

---

**Dernière mise à jour** : Janvier 2026  
**Version contexte** : 1.0.0
