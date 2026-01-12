# TASK-004 - Restauration UI Teal Opaque

> Restaurer l'identité visuelle teal opaque des screenshots de référence

**Version** : 4.0  
**Priorité** : P1 - Critique  
**Estimation** : 1h30  
**Fichier** : `src/index.css`

---

## 🎯 Objectif

Remplacer tous les backgrounds glassmorphism transparents par des **backgrounds teal opaques** pour restaurer l'identité visuelle des screenshots.

**Avant (v3.1)** : Glassmorphism fantomatique  
**Après (v4.0)** : Teal opaque, borders vifs, contraste fort

---

## 📋 Checklist d'Implémentation

### Phase 1 : Variables CSS (5 min)

- [ ] **Ajouter dans `:root` (ligne ~30)**

```css
/* v4.0 - Teal Opaque System */
--teal-page-bg: #0a1e1e;
--teal-card-bg: rgba(0, 100, 120, 0.25);
--teal-header-bg: rgba(0, 100, 120, 0.35);
--teal-row-hover: rgba(0, 100, 120, 0.4);

/* Borders renforcées */
--cyan-border: rgba(0, 217, 255, 0.4);
--cyan-border-strong: rgba(0, 217, 255, 0.6);
--cyan-border-title: rgba(0, 217, 255, 0.5);
```

---

### Phase 2 : Backgrounds Globaux (10 min)

#### 2.1 Body Background

```css
/* CHERCHER (ligne ~110) */
body {
  @apply bg-background text-foreground antialiased;
  font-family: 'Inter', sans-serif;
}

/* REMPLACER PAR */
body {
  @apply bg-background text-foreground antialiased;
  font-family: 'Inter', sans-serif;
  background: #0a1e1e !important;
}
```

#### 2.2 Phone Screen

```css
/* CHERCHER (ligne ~850) */
.phone-screen {
  /* ... */
  background: #000;
  /* ... */
}

/* REMPLACER PAR */
.phone-screen {
  /* ... */
  background: #0a1e1e;
  /* ... */
}
```

---

### Phase 3 : Design System Classes (20 min)

#### 3.1 Page Title

```css
/* CHERCHER (ligne ~590) */
.ds-page-title {
  background: rgba(0, 217, 255, 0.05);
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}

/* REMPLACER PAR */
.ds-page-title {
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.5);
  /* ... */
}
```

#### 3.2 Filter Bar 2 Lignes

```css
/* CHERCHER (ligne ~710) */
.ds-filter-bar-2lines {
  background: rgba(0, 217, 255, 0.02);
  border: 1px solid rgba(0, 217, 255, 0.2);
  /* ... */
}

/* REMPLACER PAR */
.ds-filter-bar-2lines {
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}
```

#### 3.3 Card Container

```css
/* CHERCHER (ligne ~660) */
.ds-card {
  flex: 1;
  background: rgba(0, 217, 255, 0.03);
  border: 1px solid rgba(0, 217, 255, 0.2);
  /* ... */
}

/* REMPLACER PAR */
.ds-card {
  flex: 1;
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}
```

#### 3.4 Table Header

```css
/* CHERCHER (ligne ~680) */
.ds-table thead {
  background: rgba(0, 217, 255, 0.12);
  border-bottom: 2px solid rgba(0, 217, 255, 0.3);
}

/* REMPLACER PAR */
.ds-table thead {
  background: rgba(0, 100, 120, 0.35);
  border-bottom: 2px solid rgba(0, 217, 255, 0.4);
}
```

#### 3.5 Table Row Hover

```css
/* CHERCHER (ligne ~700) */
.ds-table tbody tr:hover {
  background: rgba(0, 217, 255, 0.08);
}

/* REMPLACER PAR */
.ds-table tbody tr:hover {
  background: rgba(0, 100, 120, 0.4);
}
```

#### 3.6 Footer Bar (Caviste)

```css
/* CHERCHER (ligne ~760) */
.ds-footer-bar {
  /* ... */
  background: rgba(255, 51, 102, 0.1);
  border: 1px solid rgba(255, 51, 102, 0.4);
  /* ... */
}

/* GARDER TEL QUEL (rouge/rose correct) */
```

---

### Phase 4 : Page Classement (15 min)

#### 4.1 Title Glass

```css
/* CHERCHER (ligne ~900) */
.classement-title-glass {
  background: rgba(0, 217, 255, 0.05);
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}

/* REMPLACER PAR */
.classement-title-glass {
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.5);
  /* ... */
}
```

#### 4.2 Combined Menu

```css
/* CHERCHER (ligne ~920) */
.classement-combined-menu {
  /* ... */
  background: rgba(0, 217, 255, 0.02);
  border: 1px solid rgba(0, 217, 255, 0.2);
  /* ... */
}

/* REMPLACER PAR */
.classement-combined-menu {
  /* ... */
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}
```

---

### Phase 5 : Page Match (15 min)

#### 5.1 Title Glass

```css
/* CHERCHER (ligne ~1020) */
.match-title-glass {
  background: rgba(0, 217, 255, 0.05);
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}

/* REMPLACER PAR */
.match-title-glass {
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.5);
  /* ... */
}
```

#### 5.2 Segment Bar

```css
/* CHERCHER (ligne ~1040) */
.match-segment-bar {
  /* ... */
  background: rgba(0, 217, 255, 0.02);
  border: 1px solid rgba(0, 217, 255, 0.2);
  /* ... */
}

/* REMPLACER PAR */
.match-segment-bar {
  /* ... */
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}
```

#### 5.3 Matches Card

```css
/* CHERCHER (ligne ~1200) */
.matches-card {
  background: rgba(0, 217, 255, 0.03);
  border: 1px solid var(--glass-border);
  /* ... */
}

/* REMPLACER PAR */
.matches-card {
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}
```

#### 5.4 Matches Header

```css
/* CHERCHER (ligne ~1210) */
.matches-header {
  /* ... */
  background: rgba(0, 217, 255, 0.12);
  border-bottom: 2px solid rgba(0, 217, 255, 0.3);
  /* ... */
}

/* REMPLACER PAR */
.matches-header {
  /* ... */
  background: rgba(0, 100, 120, 0.35);
  border-bottom: 2px solid rgba(0, 217, 255, 0.4);
  /* ... */
}
```

#### 5.5 Team Select

```css
/* CHERCHER (ligne ~1450) */
.team-select {
  /* ... */
  border: 1px solid rgba(0, 217, 255, 0.2);
  /* ... */
}

/* REMPLACER PAR */
.team-select {
  /* ... */
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}
```

#### 5.6 Exempt V4

```css
/* CHERCHER (ligne ~1150) */
.exempt-v4 {
  background: rgba(0, 217, 255, 0.05);
  border: 1px solid rgba(0, 217, 255, 0.25);
  /* ... */
}

/* REMPLACER PAR */
.exempt-v4 {
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}
```

---

### Phase 6 : Page Palmarès (15 min)

#### 6.1 Title Glass

```css
/* CHERCHER (ligne ~1750) */
.palmares-title-glass {
  background: rgba(0, 217, 255, 0.05);
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}

/* REMPLACER PAR */
.palmares-title-glass {
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.5);
  /* ... */
}
```

#### 6.2 Filter Bar

```css
/* CHERCHER (ligne ~1780) */
.palmares-filter-bar {
  /* ... */
  background: rgba(0, 217, 255, 0.02);
  border: 1px solid rgba(0, 217, 255, 0.2);
  /* ... */
}

/* REMPLACER PAR */
.palmares-filter-bar {
  /* ... */
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}
```

#### 6.3 Table Card

```css
/* CHERCHER (ligne ~1810) */
.palmares-table-card {
  background: #000000;
  border: 1px solid rgba(0, 217, 255, 0.2);
  /* ... */
}

/* REMPLACER PAR */
.palmares-table-card {
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}
```

#### 6.4 Table Header

```css
/* CHERCHER (ligne ~1820) */
.palmares-table-header {
  /* ... */
  background: rgba(0, 217, 255, 0.12);
  border-bottom: 1px solid rgba(0, 217, 255, 0.3);
}

/* REMPLACER PAR */
.palmares-table-header {
  /* ... */
  background: rgba(0, 100, 120, 0.35);
  border-bottom: 1px solid rgba(0, 217, 255, 0.4);
}
```

#### 6.5 Table Row

```css
/* CHERCHER (ligne ~1850) */
.palmares-row {
  /* ... */
  background: #000000;
  border-bottom: 1px solid rgba(0, 217, 255, 0.1);
  /* ... */
}

/* REMPLACER PAR */
.palmares-row {
  /* ... */
  background: transparent;
  border-bottom: 1px solid rgba(0, 217, 255, 0.15);
  /* ... */
}
```

#### 6.6 Row Hover

```css
/* CHERCHER (ligne ~1860) */
.palmares-row:hover {
  background: rgba(0, 217, 255, 0.08);
}

/* REMPLACER PAR */
.palmares-row:hover {
  background: rgba(0, 100, 120, 0.4);
}
```

---

### Phase 7 : Page Panthéon (15 min)

#### 7.1 Title Glass

```css
/* CHERCHER (ligne ~1950) */
.pantheon-title-glass {
  background: rgba(0, 217, 255, 0.05);
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}

/* REMPLACER PAR */
.pantheon-title-glass {
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.5);
  /* ... */
}
```

#### 7.2 Table Container

```css
/* CHERCHER (ligne ~1975) */
.pantheon-table-container {
  background: rgba(0, 100, 120, 0.1);
  border: 1px solid rgba(0, 217, 255, 0.2);
  /* ... */
}

/* REMPLACER PAR */
.pantheon-table-container {
  background: rgba(0, 100, 120, 0.25);
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}
```

#### 7.3 Table Header

```css
/* CHERCHER (ligne ~1990) */
.pantheon-table thead {
  background: rgba(0, 100, 120, 0.15);
}

/* REMPLACER PAR */
.pantheon-table thead {
  background: rgba(0, 100, 120, 0.35);
}
```

---

### Phase 8 : Modals & Overlays (10 min)

#### 8.1 Picker Modal

```css
/* CHERCHER (ligne ~1570) */
.picker-modal {
  /* ... */
  background: rgba(10, 10, 10, 0.95);
  border: 2px solid rgba(0, 217, 255, 0.3);
  /* ... */
}

/* REMPLACER PAR */
.picker-modal {
  /* ... */
  background: rgba(10, 30, 30, 0.98);
  border: 2px solid rgba(0, 217, 255, 0.4);
  /* ... */
}
```

#### 8.2 Import Menu

```css
/* CHERCHER (ligne ~1280) */
.import-menu {
  /* ... */
  background: rgba(10, 10, 10, 0.98);
  border: 1px solid rgba(0, 217, 255, 0.3);
  /* ... */
}

/* REMPLACER PAR */
.import-menu {
  /* ... */
  background: rgba(10, 30, 30, 0.98);
  border: 1px solid rgba(0, 217, 255, 0.4);
  /* ... */
}
```

---

## ✅ Validation

### Tests Visuels

Après implémentation, vérifier sur chaque page :

#### Classement
- [ ] Background page = teal foncé (pas noir)
- [ ] Title card = teal opaque bien visible
- [ ] Filter bar (Ligue + Saison) = teal opaque
- [ ] Table card = teal background
- [ ] Table header = teal plus foncé
- [ ] Rows hover = teal accentué
- [ ] Caviste footer = rose/rouge (inchangé)

#### Match
- [ ] Title = teal opaque
- [ ] Segments (France, S9, J.1, Import) = teal backgrounds
- [ ] Table header = teal
- [ ] Rows = teal hover visible
- [ ] Selects = borders cyan vifs
- [ ] Score inputs = borders cyan visibles

#### Palmarès
- [ ] Title = teal opaque
- [ ] Filter bar (drapeaux) = teal backgrounds
- [ ] Table card = teal background
- [ ] Table header = teal foncé
- [ ] Rows = teal hover visible
- [ ] Season badges = cyan opaques
- [ ] Points = green vif

#### Panthéon
- [ ] Title = teal opaque
- [ ] Table container = teal background
- [ ] Headers = teal foncé
- [ ] Badge position 1 = gold bien visible
- [ ] Badges 2+ = cyan opaques
- [ ] Total colonne = cyan/gold selon rang

### Checklist Finale

- [ ] Toutes les pages ont background teal (pas noir)
- [ ] Tous les borders sont cyan vifs (bien visibles)
- [ ] Tous les backgrounds cards sont teal opaques
- [ ] Aucun glassmorphism transparent restant
- [ ] Contraste texte/background suffisant
- [ ] Screenshots correspondent à la référence

---

## 📸 Screenshots de Validation

Comparer avec les screenshots de référence :

- `IMG_2813.PNG` - Classement
- `IMG_2814.PNG` - Match
- `IMG_2815.PNG` - Palmarès
- `IMG_2816.PNG` - Panthéon

**Critère de succès** : Identité visuelle identique aux screenshots

---

## 🚀 Déploiement

### Commandes

```bash
# 1. Modification index.css (locale)
# Éditer src/index.css selon checklist

# 2. Commit
git add src/index.css
git commit -m "feat: restore teal opaque UI (v4.0)"

# 3. Push (déclenche Vercel auto-deploy)
git push origin main

# 4. Attendre 2-3 min pour Vercel
# 5. Vérifier sur site live
```

---

## 📝 Notes Techniques

### Numéros de Lignes

Les numéros de lignes sont **approximatifs** et peuvent varier.  
**Méthode recommandée** : Rechercher par nom de classe (`.ds-card`, `.match-title-glass`, etc.)

### Ordre d'Application

1. Variables CSS d'abord (`:root`)
2. Classes globales (`.phone-screen`, `body`)
3. Design System (`.ds-*`)
4. Pages spécifiques (`.classement-*`, `.match-*`, etc.)

### Backup

Avant de commencer, **créer une branche de backup** :

```bash
git checkout -b backup-v3.1
git push origin backup-v3.1
git checkout main
```

---

**Estimation totale** : 1h30  
**Difficulté** : Faible (search & replace)  
**Impact** : Élevé (identité visuelle complète)
