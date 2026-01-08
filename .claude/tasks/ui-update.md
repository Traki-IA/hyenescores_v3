# Template : UI Update

> Utilise ce template pour modifier l'interface utilisateur (design, styling, layout).

---

## 📋 Modification UI

### Page/Composant Concerné
[Nom de la page ou du composant à modifier]

### Description Changement
[Ce qui va changer visuellement]

### Raison
[Pourquoi cette modification est nécessaire]

---

## 🎨 Spécifications Visuelles

### Avant (État Actuel)
[Description ou screenshot de l'état actuel]

### Après (État Souhaité)
[Description ou mockup de l'état souhaité]

### Mockup Référence
[Lien vers mockup validé si disponible]

---

## 🔧 Modifications Techniques

### Fichier(s) à Modifier
- [ ] `src/pages/...`
- [ ] `src/components/...`
- [ ] `src/index.css` (si styles globaux)

### Type de Modification
- [ ] Couleurs
- [ ] Typographie
- [ ] Spacing/Layout
- [ ] Glassmorphism
- [ ] Responsive
- [ ] Animations/Transitions
- [ ] Autre : ___________

---

## ✅ Checklist Design System

### Validation STRICTE

#### Couleurs
- [ ] **Primaire** : Cyan #00d9ff (`text-[#00d9ff]` ou `bg-[#00d9ff]`)
- [ ] **Hiérarchie** : Gold #fbbf24 (uniquement champions)
- [ ] **Positive** : Green #10b981
- [ ] **Negative** : Red #ef4444
- [ ] **Background** : Black pur #000000
- [ ] **Surface** : Glassmorphism (pas de couleurs plates)

#### Glassmorphism
- [ ] Pattern appliqué : `backdrop-blur-md bg-white/5 border border-white/10`
- [ ] Variantes si nécessaire :
  - Léger : `backdrop-blur-sm bg-white/5`
  - Fort : `backdrop-blur-lg bg-white/10`

#### Typographie
- [ ] **Headers** : `font-rajdhani font-bold`
- [ ] **Body** : `font-inter` (weight 400 ou 600)
- [ ] Hiérarchie claire (tailles cohérentes)

#### Responsive
- [ ] Test 390px (mobile) ✅ PRIORITÉ
- [ ] Test 640px (sm)
- [ ] Test 768px (md)
- [ ] Test 1024px (lg)
- [ ] Pas de scroll horizontal
- [ ] Pas de débordement visuel

#### Interactions
- [ ] Hover states définis
- [ ] Transitions smooth (`transition-all duration-300`)
- [ ] Active/Focus states accessibles

---

## 🧪 Tests Visuels

### Avant Commit
- [ ] Screenshot 390px (mobile)
- [ ] Screenshot desktop
- [ ] Comparaison avant/après
- [ ] Validation cohérence page complète

### Test Données Réelles
- [ ] Noms managers réels (ex: Traknar_87, pas "User 1")
- [ ] Données multi-saisons
- [ ] Edge cases visuels (longs noms, grands nombres, etc.)

---

## 📝 Checklist Implémentation

### Avant
- [ ] Mockup/specs clairs
- [ ] Design system validé
- [ ] Fichiers identifiés

### Pendant
- [ ] Modifications CSS/Tailwind appliquées
- [ ] Test local : `npm run dev`
- [ ] Validation visuelle navigateur

### Après
- [ ] Screenshots avant/après
- [ ] Commit : `git commit -m "style: [description]"`
- [ ] Push : `git push origin main`
- [ ] Validation Vercel (attendre ~2 min)
- [ ] Confirmation production conforme
- [ ] Update `docs/CHANGELOG.md` si changement majeur

---

## 🎯 Cas Spécifiques

### Modification Couleur
```css
/* ❌ ÉVITER */
.element { color: #1e40af; }

/* ✅ UTILISER */
.element { color: #00d9ff; } /* Cyan primary */
```

### Modification Glassmorphism
```css
/* ❌ ÉVITER */
.card { background: rgba(0, 0, 0, 0.8); }

/* ✅ UTILISER */
.card {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Modification Typographie
```css
/* ❌ ÉVITER */
h1 { font-family: Arial; }

/* ✅ UTILISER */
h1 { font-family: 'Rajdhani', sans-serif; font-weight: 700; }
```

---

## 📐 Spacing Reference

### Tailwind Classes Recommandées
```
Padding : p-2, p-4, p-6 (multiples de 4)
Margin : m-2, m-4, m-6
Gap : gap-2, gap-4, gap-6
```

### Mobile (390px)
- Padding réduit : `p-2` ou `p-3`
- Gaps serrés : `gap-2`
- Priorité densité information

### Desktop (≥1024px)
- Padding généreux : `p-4` ou `p-6`
- Gaps aérés : `gap-4`
- Priorité lisibilité

---

## 📝 Notes

### Changements Effectués
[Liste des modifications précises]

### Difficultés Rencontrées
[Problèmes CSS, spécificité, etc.]

### Screenshots
- **Avant** : [lien ou description]
- **Après** : [lien ou description]

---

**Template version** : 1.0.0  
**Dernière mise à jour** : Janvier 2026
