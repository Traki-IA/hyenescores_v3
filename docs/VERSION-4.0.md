# HyeneScores v4.0 - Spécifications

> Restauration de l'UI Teal Opaque (Référence Screenshots)

**Status** : 🚀 Prêt à lancer  
**Date début** : Janvier 2026  
**Objectif** : Restaurer l'identité visuelle teal opaque des screenshots de référence

---

## 🎯 Objectif Version 4.0

### Problème v3.1
La version 3.1 a appliqué un **"glassmorphism systématique"** qui a dilué l'identité visuelle :
- ❌ Backgrounds quasi-transparents (invisibles)
- ❌ Borders trop faibles
- ❌ Noir pur au lieu de teal foncé
- ❌ Contraste insuffisant

### Solution v4.0
**Restaurer l'UI teal opaque des screenshots** :
- ✅ Backgrounds teal opaques et visibles
- ✅ Borders cyan vifs
- ✅ Background page teal foncé (pas noir)
- ✅ Contraste fort et lisibilité maximale

---

## 📊 État d'Avancement Global

### Pages à Migrer
```
Classement  : ░░░░░░░░░░░░░░░░░░   0% (priorité #1)
Match       : ░░░░░░░░░░░░░░░░░░   0% (priorité #2)
Palmarès    : ░░░░░░░░░░░░░░░░░░   0% (priorité #3)
Panthéon    : ░░░░░░░░░░░░░░░░░░   0% (priorité #4)
```

**Toutes les pages** utilisent actuellement les mêmes classes CSS problématiques.

---

## 🎨 Palette Couleurs v4.0

### Comparaison v3.1 vs v4.0

| Élément | v3.1 (❌ Actuel) | v4.0 (✅ Cible) |
|---------|------------------|-----------------|
| **Page BG** | `#000000` (noir pur) | `#0a1e1e` (teal foncé) |
| **Cards BG** | `rgba(0, 217, 255, 0.03)` | `rgba(0, 100, 120, 0.25)` |
| **Headers BG** | `rgba(0, 217, 255, 0.12)` | `rgba(0, 100, 120, 0.35)` |
| **Borders** | `rgba(0, 217, 255, 0.2)` | `rgba(0, 217, 255, 0.4)` |
| **Border Strong** | `rgba(0, 217, 255, 0.4)` | `rgba(0, 217, 255, 0.6)` |

### CSS Variables à Créer

```css
:root {
  /* v4.0 - Teal Opaque System */
  --teal-page-bg: #0a1e1e;
  --teal-card-bg: rgba(0, 100, 120, 0.25);
  --teal-header-bg: rgba(0, 100, 120, 0.35);
  --teal-row-hover: rgba(0, 100, 120, 0.4);
  
  /* Borders renforcées */
  --cyan-border: rgba(0, 217, 255, 0.4);
  --cyan-border-strong: rgba(0, 217, 255, 0.6);
  
  /* Primaires conservées */
  --primary: #00d9ff; /* Cyan */
  --gold: #FFB830;
  --green: #00ff88;
  --red: #ff4444;
}
```

---

## 📄 Changements par Fichier

### `src/index.css`

#### 1. Page Background
```css
/* AVANT (v3.1) */
body {
  background: #000000;
}

/* APRÈS (v4.0) */
body {
  background: #0a1e1e;
}
```

#### 2. Cards & Containers
```css
/* AVANT (v3.1) */
.ds-card {
  background: rgba(0, 217, 255, 0.03);
  border: 1px solid rgba(0, 217, 255, 0.2);
}

/* APRÈS (v4.0) */
.ds-card {
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.4);
}
```

#### 3. Headers
```css
/* AVANT (v3.1) */
.ds-table thead {
  background: rgba(0, 217, 255, 0.12);
}

/* APRÈS (v4.0) */
.ds-table thead {
  background: rgba(0, 100, 120, 0.35);
}
```

#### 4. Filter Bars
```css
/* AVANT (v3.1) */
.ds-filter-bar-2lines {
  background: rgba(0, 217, 255, 0.02);
  border: 1px solid rgba(0, 217, 255, 0.2);
}

/* APRÈS (v4.0) */
.ds-filter-bar-2lines {
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.4);
}
```

#### 5. Row Hover
```css
/* AVANT (v3.1) */
.ds-table tbody tr:hover {
  background: rgba(0, 217, 255, 0.08);
}

/* APRÈS (v4.0) */
.ds-table tbody tr:hover {
  background: rgba(0, 100, 120, 0.4);
}
```

---

## 🔧 Classes CSS à Modifier

### Priorité P1 - Critique (Base Visuelle)

#### Global
- `.phone-screen` → `background: #0a1e1e`
- `.content-container` → (hérite du parent)

#### Design System Classes
- `.ds-page-title` → `background: rgba(0, 100, 120, 0.25)` + `border: rgba(0, 217, 255, 0.5)`
- `.ds-filter-bar-2lines` → `background: rgba(0, 100, 120, 0.25)` + `border: rgba(0, 217, 255, 0.4)`
- `.ds-card` → `background: rgba(0, 100, 120, 0.25)` + `border: rgba(0, 217, 255, 0.4)`
- `.ds-table thead` → `background: rgba(0, 100, 120, 0.35)`
- `.ds-table tbody tr:hover` → `background: rgba(0, 100, 120, 0.4)`

### Priorité P2 - Pages Spécifiques

#### Classement
- `.classement-title-glass` → `background: rgba(0, 100, 120, 0.25)`
- `.classement-combined-menu` → `background: rgba(0, 100, 120, 0.25)`
- `.ds-footer-bar` → (conserver rose/rouge actuel)

#### Match
- `.match-title-glass` → `background: rgba(0, 100, 120, 0.25)`
- `.match-segment-bar` → `background: rgba(0, 100, 120, 0.25)`
- `.matches-card` → `background: rgba(0, 100, 120, 0.25)`
- `.matches-header` → `background: rgba(0, 100, 120, 0.35)`
- `.team-select` → `border: rgba(0, 217, 255, 0.4)`

#### Palmarès
- `.palmares-title-glass` → `background: rgba(0, 100, 120, 0.25)`
- `.palmares-filter-bar` → `background: rgba(0, 100, 120, 0.25)`
- `.palmares-table-card` → `background: rgba(0, 100, 120, 0.25)`
- `.palmares-table-header` → `background: rgba(0, 100, 120, 0.35)`

#### Panthéon
- `.pantheon-title-glass` → `background: rgba(0, 100, 120, 0.25)`
- `.pantheon-table-container` → `background: rgba(0, 100, 120, 0.25)`
- `.pantheon-table thead` → `background: rgba(0, 100, 120, 0.35)`

### Priorité P3 - Composants Secondaires

#### Modals & Overlays
- `.picker-modal` → `background: rgba(10, 30, 30, 0.98)` (teal très foncé)
- `.import-menu` → `background: rgba(10, 30, 30, 0.98)`

---

## ✅ Checklist Implémentation v4.0

### Phase 1 : CSS Global (30 min)
- [ ] Ajouter variables CSS v4.0 dans `:root`
- [ ] Modifier `body` background → `#0a1e1e`
- [ ] Modifier `.phone-screen` background → `#0a1e1e`
- [ ] Modifier toutes classes `.ds-*` (Design System)

### Phase 2 : Pages Principales (1h)
- [ ] Classement : Modifier toutes classes `.classement-*`
- [ ] Match : Modifier toutes classes `.match-*`
- [ ] Palmarès : Modifier toutes classes `.palmares-*`
- [ ] Panthéon : Modifier toutes classes `.pantheon-*`

### Phase 3 : Validation (15 min)
- [ ] Screenshot Classement vs référence
- [ ] Screenshot Match vs référence
- [ ] Screenshot Palmarès vs référence
- [ ] Screenshot Panthéon vs référence
- [ ] Vérifier badges position 1 (gold visible)
- [ ] Vérifier contraste lisibilité

---

## 🎨 Design System v4.0

### Principes Fondamentaux

**1. Teal Opaque Partout**
- Tous les backgrounds utilisent teal opaque
- Fini le glassmorphism fantomatique
- Lisibilité maximale

**2. Borders Cyan Vifs**
- Toutes les bordures bien visibles
- Renforcer de 0.2 → 0.4 minimum
- Effet "cadre technologique"

**3. Contraste Fort**
- Texte blanc sur teal foncé
- Cyan électrique pour accents
- Gold/Green bien saturés

**4. Cohérence Totale**
- Mêmes valeurs sur toutes les pages
- Pas d'exceptions sauf Caviste (rouge)
- Identité visuelle unique

### Valeurs Standards

```css
/* Backgrounds */
--bg-page: #0a1e1e;
--bg-card: rgba(0, 100, 120, 0.25);
--bg-header: rgba(0, 100, 120, 0.35);
--bg-hover: rgba(0, 100, 120, 0.4);

/* Borders */
--border-default: rgba(0, 217, 255, 0.4);
--border-strong: rgba(0, 217, 255, 0.6);
--border-title: rgba(0, 217, 255, 0.5);

/* Text */
--text-primary: #ffffff;
--text-cyan: #00d9ff;
--text-green: #00ff88;
--text-gold: #FFB830;
```

---

## 📋 Tâches Créées

### Complétées
*Aucune*

### En Cours
- **TASK-004** : Restauration UI Teal Opaque

### À Créer
*Aucune (v4.0 = 1 seule grosse tâche)*

---

## 🐛 Bugs Corrigés vs v3.1

### Visuels
1. ✅ Backgrounds invisibles → Teal opaques
2. ✅ Borders trop faibles → Cyan vifs
3. ✅ Noir pur → Teal foncé
4. ✅ Contraste insuffisant → Fort et lisible

### Fonctionnels
- Aucun bug fonctionnel (v3.1 fonctionne)
- v4.0 = uniquement changements CSS

---

## 🔗 Références

### Screenshots Référence
- `IMG_2813.PNG` - Classement ✅
- `IMG_2814.PNG` - Match ✅
- `IMG_2815.PNG` - Palmarès ✅
- `IMG_2816.PNG` - Panthéon ✅

### Documentation
- Design System v3.1 : `DESIGN-SYSTEM.md`
- Quick Start : `QUICK-START.md`
- Task principale : `tasks/TASK-004-restore-teal-ui.md`

---

## 📝 Notes Version

### Décision Stratégique

**Pourquoi abandonner le glassmorphism ?**
- Trop subtil sur mobile
- Invisible en plein soleil
- Dilue l'identité visuelle
- Screenshots prouvent que teal opaque > glassmorphism

**Pourquoi teal opaque ?**
- Contraste fort et lisible
- Identité visuelle unique
- Technologique et moderne
- Fonctionne en toutes conditions

### Leçons Apprées v3.1

1. **Ne pas sur-designer**
   - Glassmorphism partout = invisible
   - Simplicité > tendance

2. **Toujours comparer aux screenshots**
   - Screenshots = référence absolue
   - Code doit reproduire visuellement

3. **Mobile-first = lisibilité d'abord**
   - Subtilité = invisible sur petit écran
   - Contraste fort essentiel

---

**Version** : 4.0.0  
**Dernière mise à jour** : Janvier 2026  
**Status** : 🚀 Prêt à implémenter
