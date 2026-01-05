# 🎯 HyeneScores - État du Projet

> **Dernière mise à jour** : 2026-01-05
> **Repository actif** : hyenescores_v2
> **Déploiement** : Vercel

---

## 📊 État des Pages

| Page | CSS | TSX | Status | À faire |
|------|-----|-----|--------|---------|
| **Panthéon** | ✅ 100% | ✅ 100% | 🟢 Terminé | - |
| **Palmarès** | ⚠️ 95% | ✅ 100% | 🟡 Bug CSS | Background gradient → #000000 |
| **Match** | ✅ 100% | ⚠️ 30% | 🟡 Partiel | Header à alléger, barre 4 segments |
| **Classement** | ✅ 100% | ❌ 0% | 🔴 Non fait | Implémenter TSX avec classes CSS |

---

## 🎨 Design System Validé (v3.1)

### Couleurs
```css
--cyan: #00d9ff          /* Primary, bordures, accents */
--gold: #FFB830          /* Champion, rank 1, highlights */
--green: #00ff88         /* Positif, validé, points */
--red: #ff4444           /* Négatif, erreurs */
--pink: #ff3366          /* Exempt, Caviste */
--background: #000000    /* Fond NOIR PUR toutes pages */
```

### Glassmorphism
```css
--glass-bg: rgba(0, 217, 255, 0.02);
--glass-border: rgba(0, 217, 255, 0.2);
--glass-border-strong: rgba(0, 217, 255, 0.4);
--glass-bg-header: rgba(0, 217, 255, 0.15);
```

### Typography
- **Titres** : Rajdhani 800, uppercase, letter-spacing 3px
- **Headers tableau** : Inter 9px, 800, uppercase
- **Body** : Inter 400-700
- **Données** : Rajdhani 700-900

### Structure commune
```
┌─────────────────────────────┐
│ Titre glassmorphism + glow  │ ← Toutes pages
├─────────────────────────────┤
│ Filtres/Menu                │ ← Selon page
├─────────────────────────────┤
│ Contenu principal           │ ← Table/Cards
├─────────────────────────────┤
│ Bottom Nav fixe             │ ← 4 onglets
└─────────────────────────────┘
```

---

## 🔧 Corrections en attente

### 1. Palmarès - Background (Priorité HAUTE)
**Fichier** : `src/index.css`
**Section** : PALMARES PAGE v3.1
**Ligne** : `.palmares-page`
**Correction** :
```css
/* AVANT */
background: linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 100%);

/* APRÈS */
background: #000000;
```

### 2. Match - Header (Priorité MOYENNE)
- Implémenter barre 4 segments
- Déplacer Exempt en bas
- Validation verte sur scores uniquement

### 3. Classement - Full TSX (Priorité BASSE)
- Titre glassmorphism
- Menu combiné unique
- Progression circulaire SVG

---

## ✅ Décisions Validées

| Date | Décision | Référence |
|------|----------|-----------|
| 2025-12-20 | Design glassmorphism cyan | Maquette v2.0 |
| 2025-12-22 | Panthéon format compact | Variante C |
| 2026-01-03 | Maquette v3.0 4 pages | Chat validation |
| 2026-01-04 | Badge rank 1 = gold | Fix CSS specificity |
| 2026-01-04 | Fond noir pur #000000 | Harmonisation |

---

## 📁 Structure Fichiers Clés

```
src/
├── index.css           # 44KB - TOUS les styles v3.1
├── pages/
│   ├── Index.tsx       # Classement (à refaire)
│   ├── Match.tsx       # Match (partiel)
│   ├── Palmares.tsx    # Palmarès (OK sauf bg)
│   └── Pantheon.tsx    # Panthéon (complet)
└── components/
    └── BottomNav.tsx   # Navigation commune
```

---

## 💡 Template Requête Optimisée

Pour économiser des tokens, utilise ce format :

```
📍 Page : [Nom de la page]
📁 Fichier : [Chemin exact]
🎯 Action : [Créer/Modifier/Corriger/Analyser]
📝 Détail : [Description précise]
```

**Exemple** :
```
📍 Page : Palmarès
📁 Fichier : src/index.css
🎯 Action : Corriger
📝 Détail : .palmares-page background gradient → #000000
```

---

## 🚀 Prochaines Étapes

1. [ ] Corriger background Palmarès
2. [ ] Alléger header Match
3. [ ] Implémenter Classement TSX
4. [ ] Tests mobile 390px toutes pages
5. [ ] Déploiement final Vercel

---

*Ce fichier est ta source de vérité. Référence-le au début de chaque session Claude.*
