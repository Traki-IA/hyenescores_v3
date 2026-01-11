# TASK-005 - Corrections Post-Déploiement TASK-004

> **Status** : 🔴 À faire  
> **Priorité** : P0 - Urgent  
> **Pages concernées** : Classement, Match, Palmarès, Panthéon  
> **Date création** : 12 janvier 2026

---

## 🎯 Objectif

Corriger 7 problèmes visuels critiques suite au déploiement de TASK-004.

---

## ❌ Problèmes Identifiés

### **CLASSEMENT**
1. Position 10 coupée - tableau tronqué
2. Caviste invisible sans scroll
3. "SAISON 9" doit être aligné à droite dans Filter Bar

### **MATCH**
4. Textes Filter Bar trop petits
5. "J.1 (0/5)" sur 2 lignes au lieu d'1
6. Rond de validation vert toujours présent

### **PALMARÈS + PANTHÉON**
7. Tableaux collés à la barre de navigation (padding manquant)

---

## ✅ Solutions

### **1. CLASSEMENT - Affichage Complet Sans Scroll**

#### CSS (`src/index.css`)

**Modifier les paddings/margins pour réduire l'espace vertical :**

```css
/* Réduire espace titre */
.classement-page .ds-title {
  margin-bottom: 8px; /* Changé de 10px */
}

/* Réduire espace Filter Bar */
.ds-filter-bar-2lines {
  margin-bottom: 8px; /* Changé de 12px */
}

/* Tableau plus compact */
.ds-ranking-table tbody tr {
  height: 42px; /* Réduit pour gagner espace */
}

.ds-ranking-table th,
.ds-ranking-table td {
  padding: 6px 4px; /* Réduit de 8px */
}

/* Caviste plus compact */
.ds-footer-bar {
  margin-top: 8px; /* Réduit de 12px */
  padding: 6px 12px; /* Réduit de 8px */
}
```

---

### **2. CLASSEMENT - Décalage "SAISON 9" à Droite**

#### React (`src/pages/Index.tsx`)

**Modifier la ligne 1 du Filter Bar :**

```tsx
{/* Ligne 1: Ligue + Saison */}
<div className="ds-filter-line1">
  <span>🏆</span>
  <span>Ligue des Hyènes</span>
  <span className="ds-filter-separator">|</span>
  <span style={{ marginLeft: 'auto' }}>Saison 9</span>
  <span className="ds-filter-arrow">▾</span>
</div>
```

**Explication** : Ajout de `style={{ marginLeft: 'auto' }}` sur "Saison 9" pour le pousser à droite.

---

### **3. MATCH - Augmenter Taille Textes Filter Bar**

#### CSS (`src/index.css`)

```css
/* Textes Filter Bar plus lisibles */
.ds-filter-item .label {
  font-size: 14px; /* Changé de 13px */
  font-weight: 700;
}

/* Sublabel inline + même ligne */
.ds-filter-item .sublabel {
  display: inline;
  font-size: 10px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 4px; /* Ajouté pour espacement */
}
```

---

### **4. MATCH - "J.1 (0/5)" Sur 1 Seule Ligne**

#### React (`src/pages/Match.tsx`)

**Modifier le segment Journée :**

```tsx
{/* JOURNÉE - TEXTE SUR 1 LIGNE */}
<button className="ds-filter-item stacked">
  <span className="label">
    J.1 <span className="sublabel">(0/5)</span>
  </span>
</button>
```

**Avant** : 2 `<span>` séparés → 2 lignes  
**Après** : 1 `<span>` avec sublabel inline → 1 ligne

---

### **5. MATCH - Supprimer Rond de Validation**

#### React (`src/pages/Match.tsx`)

**Chercher et supprimer ce bloc JSX dans chaque match row validé :**

```tsx
{/* RETIRER COMPLÈTEMENT CE BLOC */}
{match.validated && (
  <div className="match-validated-check">
    ✓
  </div>
)}
```

**OU si c'est un composant :**

```tsx
{/* RETIRER */}
{validated && <ValidationCheck />}
```

#### CSS (`src/index.css`)

**Supprimer aussi les styles associés :**

```css
/* SUPPRIMER CES CLASSES */
.match-validated-check {
  /* ... */
}

.auto-validate-btn {
  /* ... */
}
```

---

### **6. PALMARÈS - Padding Bottom**

#### CSS (`src/index.css`)

```css
/* Page container */
.palmares-page {
  padding-bottom: 80px;
}

/* Table body */
.palmares-table-body {
  padding-bottom: 16px;
}
```

---

### **7. PANTHÉON - Padding Bottom**

#### CSS (`src/index.css`)

```css
/* Page container */
.pantheon-page {
  padding-bottom: 80px;
}

/* Table wrapper */
.pantheon-table-wrapper {
  padding-bottom: 16px;
}
```

---

## 📊 Résumé Fichiers

```
src/
├── index.css                    ✏️ Modifié (7 corrections CSS)
├── pages/
│   ├── Index.tsx                ✏️ Modifié (décalage Saison 9)
│   └── Match.tsx                ✏️ Modifié (inline sublabel + suppression rond)
```

---

## ✅ Checklist

### Classement
- [ ] Tableau affiche 10 lignes complètes sans scroll
- [ ] Caviste visible sans scroll
- [ ] "Saison 9" aligné à droite dans Filter Bar

### Match
- [ ] Textes Filter Bar lisibles (14px)
- [ ] "J.1 (0/5)" sur 1 seule ligne
- [ ] Rond de validation supprimé (entourage vert seul)

### Palmarès
- [ ] Espace visible entre tableau et nav bar

### Panthéon
- [ ] Espace visible entre tableau et nav bar

---

## 🧪 Tests

### Test 1 : Classement complet
1. Ouvrir page Classement (viewport 390px)
2. Vérifier : 10 positions + caviste visibles sans scroll
3. ✅ OK si tout visible

### Test 2 : Match validation
1. Valider un match
2. Vérifier : Entourage vert + fond vert, PAS de rond
3. ✅ OK si juste entourage

### Test 3 : Match Filter Bar
1. Observer textes "Saison 9", "J.1 (0/5)"
2. Vérifier : Lisibles + sur 1 ligne
3. ✅ OK si compact et clair

### Test 4 : Padding bottom
1. Scroll bottom Palmarès et Panthéon
2. Vérifier : Espace entre tableau et nav
3. ✅ OK si 16px visible

---

## 📸 Screenshots Attendus

1. **Classement** : Vue complète avec position 10 + caviste
2. **Classement** : "Saison 9" aligné à droite
3. **Match** : Filter Bar avec textes 14px
4. **Match** : "J.1 (0/5)" sur 1 ligne
5. **Match** : Validation sans rond (juste entourage)
6. **Palmarès** : Bottom avec padding
7. **Panthéon** : Bottom avec padding

---

**Version** : 1.0  
**Dernière mise à jour** : 12 janvier 2026  
**Status** : 🔴 Prêt pour implémentation
