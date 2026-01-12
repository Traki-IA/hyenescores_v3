# HyeneScores - Quick Start Guide

> Guide de démarrage rapide pour travailler sur HyeneScores v3.1

**Version** : 3.1.0  
**Repository** : https://github.com/Traknar-87/hyenescores_v3  
**Déploiement** : Vercel

---

## 📖 Table des Matières

1. [Vue d'Ensemble](#vue-densemble)
2. [🔴 RÈGLE D'OR - VALIDATION OBLIGATOIRE](#-règle-dor---validation-obligatoire)
3. [Installation](#installation)
4. [Structure Projet](#structure-projet)
5. [Workflows](#workflows)
6. [Design System](#design-system)
7. [Commandes Utiles](#commandes-utiles)

---

## 🎯 Vue d'Ensemble

### Qu'est-ce que HyeneScores ?

Application web de gestion pour la **"Ligue des Hyènes"**, une ligue de fantasy football privée regroupant 11 managers sur 4 championnats européens (France, Espagne, Italie, Angleterre) avec un historique multi-saisons.

### Objectifs v3.1

- ✅ Harmonisation complète du design system
- ✅ Glassmorphism systématique sur tous les composants
- ✅ Cohérence couleurs (cyan primary, gold champions)
- ✅ Responsive mobile-first (390px viewport)
- ✅ Maximum densité information sans scroll

---

## 🔴 RÈGLE D'OR - VALIDATION OBLIGATOIRE

### ⚠️ RÈGLE ABSOLUE : ZÉRO INTERPRÉTATION

**Claude NE PEUT JAMAIS :**
- Interpréter une demande
- Prendre des décisions de design
- Modifier quoi que ce soit sans validation visuelle explicite
- Créer une TASK sans que l'utilisateur ait validé des maquettes visuelles

**Claude DOIT TOUJOURS :**
- Proposer 4 variants visuels AVANT toute modification
- Attendre la validation explicite de l'utilisateur
- Implémenter UNIQUEMENT ce qui a été validé visuellement
- Suivre À LA LETTRE les choix de l'utilisateur

---

### 🚫 CE QUI EST INTERDIT

❌ **"Je vais corriger le caviste"** → NON, montre 4 façons de le corriger, attends validation  
❌ **"Je vais améliorer la validation"** → NON, montre 4 options, attends validation  
❌ **"Je pense que..."** → NON, l'utilisateur décide, pas Claude  
❌ **Créer TASK-XXX puis demander validation** → NON, valider AVANT création task  

---

### ✅ WORKFLOW OBLIGATOIRE

```
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 1 : PROBLÈME IDENTIFIÉ                          │
│  → Utilisateur montre screenshots/décrit problème       │
└─────────────────────────────────────────────────────────┘
                         ⬇️
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 2 : CLAUDE CRÉE 4 VARIANTS VISUELS              │
│  → Artifact React avec 4 solutions différentes          │
│  → Maquettes interactives ou images                     │
│  ⚠️ AUCUNE TASK CRÉÉE À CE STADE                       │
└─────────────────────────────────────────────────────────┘
                         ⬇️
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 3 : UTILISATEUR VALIDE                          │
│  → "Je veux V2 pour Classement, V1 pour Match"         │
│  → Validation EXPLICITE et DÉTAILLÉE                    │
│  ⚠️ SI PAS DE VALIDATION = STOP ICI                    │
└─────────────────────────────────────────────────────────┘
                         ⬇️
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 4 : CLAUDE CRÉE TASK AVEC CHOIX VALIDÉS         │
│  → TASK-XXX.md contient UNIQUEMENT ce qui est validé   │
│  → Specs ultra-précises basées sur variants choisis     │
│  → Push GitHub                                          │
└─────────────────────────────────────────────────────────┘
                         ⬇️
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 5 : IMPLÉMENTATION                              │
│  → Claude Code lit TASK-XXX.md                          │
│  → Implémente exactement ce qui est dans la task       │
│  → Aucune initiative personnelle autorisée              │
└─────────────────────────────────────────────────────────┘
```

---

### ❗ EXEMPLES D'APPLICATION

#### ✅ CORRECT

**Utilisateur** : "Le caviste est invisible, il faut scroller"

**Claude** :
```
Je te crée 4 variants pour résoudre ce problème :

V1: Réduire tous les paddings (caviste visible sans scroll)
V2: Caviste en overlay flottant
V3: Tableau ultra-compact (rows 36px)
V4: Indicateur "scroll pour voir caviste"

[Artifact avec 4 maquettes]

Quel variant préfères-tu ?
```

**Utilisateur** : "V1"

**Claude** : [Crée TASK-XXX avec spécifications exactes de V1]

---

#### ❌ INCORRECT

**Utilisateur** : "Le caviste est invisible, il faut scroller"

**Claude** :
```
Je vais créer une TASK pour réduire les marges
et rendre le caviste visible.

[Crée TASK-004 et push GitHub]

C'est prêt, lance Claude Code !
```

**PROBLÈME** : Aucune validation visuelle, Claude a interprété la solution.

---

### 🎯 PRINCIPE FONDAMENTAL

> **L'UTILISATEUR EST LE SEUL DÉCIDEUR.**  
> Claude est un PROPOSEUR, pas un DÉCIDEUR.  
> Toute modification visuelle = 4 variants + validation AVANT task.

---

### 📋 CHECKLIST AVANT TOUTE TASK

Avant de créer `docs/tasks/TASK-XXX.md`, vérifier :

- [ ] Des variants visuels ont été proposés (minimum 2, idéalement 4)
- [ ] L'utilisateur a explicitement validé UN variant
- [ ] La TASK ne contient QUE ce qui a été validé
- [ ] Aucune "amélioration bonus" n'a été ajoutée
- [ ] Aucune interprétation personnelle de Claude

**Si une seule case est NON → NE PAS CRÉER LA TASK**

---

## 🚀 Installation

### Prérequis

```bash
Node.js >= 18
npm >= 9
```

### Setup Local

```bash
# 1. Cloner le repository
git clone https://github.com/Traknar-87/hyenescores_v3.git
cd hyenescores_v3

# 2. Installer dépendances
npm install

# 3. Lancer serveur développement
npm run dev

# → Ouvrir http://localhost:5173
```

---

## 📂 Structure Projet

```
hyenescores_v3/
├── .claude/                    # Configuration Claude Code
│   ├── context.md             # Auto-chargé par Claude Code
│   └── tasks/                 # Templates tâches
│       ├── bug-fix.md
│       ├── new-feature.md
│       └── ui-update.md
│
├── docs/                       # Documentation projet
│   ├── QUICK-START.md         # Ce fichier
│   ├── DESIGN-SYSTEM.md       # Specs design complètes
│   ├── VERSION-3.1.md         # Specs version actuelle
│   ├── ARCHITECTURE.md        # Structure technique
│   ├── mockups/               # Mockups visuels
│   └── tasks/                 # Specs features
│       └── TASK-TEMPLATE.md
│
├── public/                     # Assets statiques
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   └── ui/                # shadcn/ui components
│   │
│   ├── hooks/                 # React hooks custom
│   │
│   ├── lib/                   # Utilities
│   │   └── utils.ts
│   │
│   ├── pages/                 # Pages principales
│   │   ├── Pantheon.tsx       # 80% implémenté
│   │   ├── Palmares.tsx       # 40% implémenté
│   │   ├── Match.tsx          # 30% implémenté
│   │   └── Classement.tsx     # 0% implémenté
│   │
│   ├── App.tsx                # Routing
│   ├── index.css              # Styles globaux
│   └── main.tsx               # Entry point
│
├── .claudeignore               # Exclusions Claude Code
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── vercel.json                # Config déploiement
```

---

## 🔄 Workflows

### Workflow Principal : Claude.ai + Lovable/Claude Code

```
┌─────────────────────────────────────────┐
│  1. CRÉATION (Claude.ai)                │
│  - Brainstorming feature                │
│  - Design 4 mockups variants            │
│  - Validation + sélection               │
│  - Création specs TASK-XXX.md           │
│  - Push specs → GitHub                  │
└─────────────────────────────────────────┘
               ⬇️
┌─────────────────────────────────────────┐
│  2. IMPLÉMENTATION                      │
│                                         │
│  Option A: LOVABLE (budget OK)          │
│  - Copier specs depuis GitHub           │
│  - Coller dans Lovable                  │
│  - Preview + validation                 │
│  - Lovable push → GitHub                │
│                                         │
│  Option B: CLAUDE CODE (économie)       │
│  - claude-code "implémenter TASK-XXX"   │
│  - Code généré localement               │
│  - git push origin main                 │
└─────────────────────────────────────────┘
               ⬇️
┌─────────────────────────────────────────┐
│  3. DÉPLOIEMENT (Automatique)           │
│  - GitHub reçoit code                   │
│  - Vercel redéploie auto (~2 min)       │
│  - Site live mis à jour ✅              │
└─────────────────────────────────────────┘
               ⬇️
┌─────────────────────────────────────────┐
│  4. VALIDATION (Claude.ai)              │
│  - Screenshot Vercel                    │
│  - Retour conversation Claude.ai        │
│  - Validation vs mockup                 │
│  - Ajustements si besoin                │
│  - Update CHANGELOG.md                  │
└─────────────────────────────────────────┘
```

---

## 🎨 Design System (Résumé)

### Couleurs

```css
/* Primary */
--primary: #00d9ff; /* Cyan électrique */

/* Hierarchy */
--hierarchy: #fbbf24; /* Gold (champions uniquement) */

/* Status */
--positive: #10b981; /* Green */
--negative: #ef4444; /* Red */

/* Backgrounds */
--background: #000000; /* Black pur */
```

### Typographie

```css
/* Headers */
font-family: 'Rajdhani', sans-serif;
font-weight: 700;

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 400 | 600;
```

### Glassmorphism (Pattern Standard)

```css
.glassmorphism {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

**TailwindCSS :**
```html
<div class="backdrop-blur-md bg-white/5 border border-white/10">
  <!-- Contenu -->
</div>
```

**→ Pour specs complètes : `docs/DESIGN-SYSTEM.md`**

---

## ⚙️ Commandes Utiles

### Développement

```bash
# Lancer serveur dev (http://localhost:5173)
npm run dev

# Build production
npm run build

# Preview build local
npm run preview
```

### Git Workflow

```bash
# Récupérer dernières modifications
git pull origin main

# Ajouter changements
git add .

# Commit
git commit -m "type: description"
# Types: feat, fix, style, docs, refactor, test

# Push (déclenche Vercel auto-deploy)
git push origin main
```

### Claude Code

```bash
# Session bug fix
claude-code "Corrige le bug de badge champion sur Panthéon"

# Session nouvelle feature
claude-code "Implémente pagination Palmarès selon TASK-002"

# Session UI update
claude-code "Harmonise glassmorphism sur page Match"
```

---

## 🎯 Pages Principales

### 1. Panthéon (80%)

**Rôle** : Classement historique tous managers confondus  
**Status** : Quasi-complet, badge champion en cours  
**Fichier** : `src/pages/Pantheon.tsx`

### 2. Palmarès (40%)

**Rôle** : Historique des champions par saison  
**Status** : Structure OK, pagination à ajouter  
**Fichier** : `src/pages/Palmares.tsx`

### 3. Match (30%)

**Rôle** : Gestion matchs et résultats  
**Status** : UI à refondre avec nouveau design system  
**Fichier** : `src/pages/Match.tsx`

### 4. Classement (0%)

**Rôle** : Classement saison en cours  
**Status** : À créer from scratch  
**Fichier** : `src/pages/Classement.tsx`

---

## 📚 Documentation Complémentaire

- **Design System complet** : `docs/DESIGN-SYSTEM.md`
- **Specs v3.1** : `docs/VERSION-3.1.md`
- **Architecture technique** : `docs/ARCHITECTURE.md`
- **Templates tâches** : `.claude/tasks/`

---

## 🚨 Règles Importantes

### ✅ À FAIRE

- Toujours tester sur viewport 390px (mobile-first)
- Utiliser glassmorphism systématiquement
- Respecter palette couleurs (cyan/gold)
- Rajdhani pour headers, Inter pour body
- Tester avec données réelles (pas de mocks)
- Commit messages en anglais avec type prefix
- **TOUJOURS proposer 4 variants avant modification**
- **TOUJOURS attendre validation explicite**

### ❌ À ÉVITER

- Couleurs hors palette (surtout bleus non-cyan)
- Backgrounds opaques (utiliser glassmorphism)
- Fonts autres que Rajdhani/Inter
- Gold pour autre chose que champions
- Données mockées/placeholder
- Scroll vertical si évitable
- **Interpréter les demandes utilisateur**
- **Créer des TASKs sans validation visuelle**
- **Prendre des décisions de design**

---

## 🔗 Liens Rapides

- **Repository** : https://github.com/Traknar-87/hyenescores_v3
- **Production** : (URL Vercel à mettre à jour)
- **Lovable** : lovable.dev
- **Support** : Issues GitHub

---

**Prêt à démarrer ?** → Lis `docs/VERSION-3.1.md` pour les tâches en cours ! 🚀
