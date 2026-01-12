# HyeneScores - Quick Start Guide

> Guide de référence complet pour travailler efficacement sur HyeneScores v3

**Version** : 3.1.0  
**Repository** : https://github.com/Traknar-87/hyenescores_v3  
**Déploiement** : Vercel

---

## 📖 Table des Matières

1. [Workflow Efficient (3 Phases)](#workflow-efficient-3-phases)
2. [Règle d'Or - Validation Obligatoire](#règle-dor---validation-obligatoire)
3. [Design System](#design-system)
4. [Stack Technique](#stack-technique)
5. [Structure Projet](#structure-projet)

---

## 🚀 Workflow Efficient (3 Phases)

### Principe Fondamental : EFFICIENT

Chaque interaction doit maximiser la valeur produite tout en minimisant :
- La consommation de tokens
- L'utilisation de l'abonnement
- Les allers-retours inutiles
- Le temps perdu

---

### Phase 1 : RÉFLEXION 💭

**Objectif** : Définir la direction stratégique

**Quand** : Au début d'une nouvelle feature ou amélioration

**Comment** :
- Discussion ouverte sur les besoins
- Exploration des possibilités
- Analyse des contraintes
- Messages courts et directs

**Output** : Direction validée par l'utilisateur

**Exemple** :
```
User: "Les utilisateurs ne voient pas le caviste"
Claude: "3 approches possibles:
1. Réduire paddings (tout visible)
2. Caviste en overlay flottant
3. Indicateur scroll
Laquelle explorer ?"
User: "Approche 1"
```

**Économie** : Messages < 100 mots, pas d'artifacts lourds

---

### Phase 2 : VALIDATION 🎨

**Objectif** : Valider visuellement la solution avant implémentation

**Quand** : Direction validée en Phase 1

**Comment** :
- Claude crée 4 variants visuels en artifact
- Mockups React interactifs ou images
- Utilisateur valide UN variant explicitement
- Aucune implémentation à ce stade

**Output** : Variant approuvé par l'utilisateur

**Exemple** :
```
Claude: [Crée artifact avec 4 mockups]
"V1: Padding réduit | V2: Ultra-compact | V3: Overlay | V4: Scroll indicator
Lequel préfères-tu ?"
User: "V2"
```

**Règles Critiques** :
- ⚠️ JAMAIS créer de TASK avant validation visuelle
- ⚠️ JAMAIS implémenter sans variant approuvé
- ⚠️ JAMAIS interpréter les besoins

**Économie** : 1 artifact, validation en 1 mot

---

### Phase 3 : EXÉCUTION ⚙️

**Objectif** : Implémenter le variant validé

**Comment** :
1. Claude demande : "Je crée TASK-XXX avec specs du V2 validé + push GitHub. Ok ?"
2. Utilisateur : "oui" ou "non"
3. Si oui → Claude crée `docs/tasks/TASK-XXX.md` avec specs ultra-précises
4. Claude push sur GitHub
5. Utilisateur lance Claude Code : `claude-code "implémenter TASK-XXX"`
6. Claude Code implémente localement
7. Git push → Vercel déploie auto
8. Validation sur site live

**Output** : Feature déployée en production

**Règles Critiques** :
- Claude demande validation AVANT chaque action
- TASK contient UNIQUEMENT ce qui a été validé
- Aucune "amélioration bonus"
- Specs atomiques et ultra-précises

**Économie** : 
- TASK = Claude.ai (stratégique)
- Implémentation = Claude Code (économique)
- Séparation claire des responsabilités

---

### 📊 Checklist de Phase

**Avant de passer à Phase 2** :
- [ ] Direction claire définie
- [ ] Utilisateur a validé l'approche
- [ ] Contraintes identifiées

**Avant de passer à Phase 3** :
- [ ] 4 variants visuels créés
- [ ] Utilisateur a choisi UN variant explicitement
- [ ] Aucune ambiguïté sur le résultat attendu

**Avant de pusher TASK** :
- [ ] Demande de validation faite
- [ ] Utilisateur a répondu "oui"
- [ ] TASK contient UNIQUEMENT le variant validé

---

## 🔴 Règle d'Or - Validation Obligatoire

### ⚠️ RÈGLE ABSOLUE : ZÉRO INTERPRÉTATION

**Claude NE PEUT JAMAIS :**
- Interpréter une demande
- Prendre des décisions de design
- Modifier quoi que ce soit sans validation visuelle explicite
- Créer une TASK sans que l'utilisateur ait validé des maquettes visuelles
- Appeler des outils (GitHub API, bash, etc.) sans demander "Ok ?"

**Claude DOIT TOUJOURS :**
- Proposer 4 variants visuels AVANT toute modification
- Attendre la validation explicite de l'utilisateur
- Demander "Ok ?" avant tout appel d'outil
- Implémenter UNIQUEMENT ce qui a été validé visuellement
- Suivre À LA LETTRE les choix de l'utilisateur

---

### 🚫 Ce Qui Est Interdit

❌ "Je vais corriger le caviste" → NON, montre 4 façons de le corriger, attends validation  
❌ "Je vais améliorer la validation" → NON, montre 4 options, attends validation  
❌ "Je pense que..." → NON, l'utilisateur décide, pas Claude  
❌ Créer TASK-XXX puis demander validation → NON, valider AVANT création task  
❌ Pusher GitHub sans demander → NON, toujours demander "Ok ?"

---

### ✅ Workflow Obligatoire

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
│  ÉTAPE 4 : CLAUDE DEMANDE PERMISSION                   │
│  → "Je crée TASK-XXX + push GitHub. Ok ?"              │
│  → Attend réponse "oui" ou "non"                        │
└─────────────────────────────────────────────────────────┘
                         ⬇️
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 5 : CLAUDE CRÉE TASK (si "oui")                 │
│  → TASK-XXX.md contient UNIQUEMENT ce qui est validé   │
│  → Specs ultra-précises basées sur variants choisis     │
│  → Push GitHub                                          │
└─────────────────────────────────────────────────────────┘
                         ⬇️
┌─────────────────────────────────────────────────────────┐
│  ÉTAPE 6 : IMPLÉMENTATION                              │
│  → Utilisateur lance Claude Code                        │
│  → Claude Code lit TASK-XXX.md                          │
│  → Implémente exactement ce qui est dans la task       │
│  → Aucune initiative personnelle autorisée              │
└─────────────────────────────────────────────────────────┘
```

---

### 🎯 Principe Fondamental

> **L'UTILISATEUR EST LE SEUL DÉCIDEUR.**  
> Claude est un PROPOSEUR, pas un DÉCIDEUR.  
> Toute modification visuelle = 4 variants + validation AVANT task.  
> Tout appel d'outil = demande "Ok ?" AVANT exécution.

---

### 📋 Checklist Avant Toute Action

**Avant de créer `docs/tasks/TASK-XXX.md`** :
- [ ] Des variants visuels ont été proposés (minimum 2, idéalement 4)
- [ ] L'utilisateur a explicitement validé UN variant
- [ ] La TASK ne contient QUE ce qui a été validé
- [ ] Aucune "amélioration bonus" n'a été ajoutée
- [ ] Aucune interprétation personnelle de Claude

**Avant tout appel d'outil (GitHub, bash, etc.)** :
- [ ] Claude a demandé : "Je fais X. Ok ?"
- [ ] Utilisateur a répondu "oui"

**Si une seule case est NON → NE PAS AGIR**

---

### ❗ Exemples d'Application

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

**Claude** : "Je crée TASK-XXX avec spécifications exactes de V1 + push GitHub. Ok ?"

**Utilisateur** : "oui"

**Claude** : [Crée TASK-XXX et push]

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

**PROBLÈME** : Aucune validation visuelle, aucune demande de permission, Claude a interprété la solution.

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

## 🔧 Stack Technique

### Frontend
- **Framework** : React 18 + TypeScript
- **Build** : Vite
- **Styling** : TailwindCSS + Custom CSS
- **Components** : shadcn/ui
- **Routing** : React Router

### Déploiement
- **Hosting** : Vercel (auto-deploy depuis GitHub main)
- **CI/CD** : Automatique via GitHub

### Développement
- **Version Control** : Git + GitHub
- **AI Coding** : Claude Code (implémentation)
- **AI Design** : Claude.ai (specs + maquettes)

---

## 📂 Structure Projet

```
hyenescores_v3/
├── .claude/                    # Configuration Claude Code
│   ├── context.md             # Auto-chargé par Claude Code
│   └── tasks/                 # Templates tâches
│
├── docs/                       # Documentation projet
│   ├── QUICK-START.md         # Ce fichier (référence complète)
│   ├── DESIGN-SYSTEM.md       # Specs design complètes
│   ├── VERSION-3.1.md         # Specs version actuelle
│   └── tasks/                 # Specs features (TASK-XXX.md)
│
├── src/
│   ├── components/ui/         # shadcn/ui components
│   ├── pages/                 # Pages principales
│   │   ├── Pantheon.tsx
│   │   ├── Palmares.tsx
│   │   ├── Match.tsx
│   │   └── Classement.tsx
│   ├── App.tsx                # Routing
│   ├── index.css              # Styles globaux
│   └── main.tsx               # Entry point
│
└── vercel.json                # Config déploiement
```

---

## 🎯 Pages Principales

### 1. Panthéon (80%)
**Rôle** : Classement historique tous managers confondus  
**Fichier** : `src/pages/Pantheon.tsx`

### 2. Palmarès (40%)
**Rôle** : Historique des champions par saison  
**Fichier** : `src/pages/Palmares.tsx`

### 3. Match (30%)
**Rôle** : Gestion matchs et résultats  
**Fichier** : `src/pages/Match.tsx`

### 4. Classement (0%)
**Rôle** : Classement saison en cours  
**Fichier** : `src/pages/Classement.tsx`

---

## 🚨 Règles Importantes

### ✅ À FAIRE

- Mobile-first (390px viewport)
- Glassmorphism systématique
- Palette couleurs stricte (cyan/gold)
- Rajdhani pour headers, Inter pour body
- Données réelles (pas de mocks)
- **TOUJOURS proposer 4 variants avant modification**
- **TOUJOURS attendre validation explicite**
- **TOUJOURS demander "Ok ?" avant appel d'outil**

### ❌ À ÉVITER

- Couleurs hors palette
- Backgrounds opaques
- Fonts autres que Rajdhani/Inter
- Gold pour autre chose que champions
- Données mockées/placeholder
- Scroll vertical si évitable
- **Interpréter les demandes utilisateur**
- **Créer des TASKs sans validation visuelle**
- **Prendre des décisions de design**
- **Appeler des outils sans permission**

---

## 💡 Commandes Git Utiles

```bash
# Récupérer dernières modifications
git pull origin main

# Commit
git commit -m "type: description"
# Types: feat, fix, style, docs, refactor

# Push (déclenche Vercel auto-deploy)
git push origin main
```

---

## 🔗 Liens Rapides

- **Repository** : https://github.com/Traknar-87/hyenescores_v3
- **Documentation complète** : `docs/DESIGN-SYSTEM.md`, `docs/VERSION-3.1.md`

---

**Dernière mise à jour** : Janvier 2026
