---
layout: post
title: "Guide d'Utilisation - Documentation Technologies Médicales"
date: 2025-12-10
categories: [guide]
tags: [guide, documentation, utilisation]
---

## Introduction

Ce guide détaillé vous accompagne dans l'utilisation complète de la plateforme de documentation des technologies médicales Novuus. Que vous soyez contributeur, lecteur ou administrateur, vous trouverez ici toutes les informations nécessaires.

---

## Table des Matières

1. [Vue d'Ensemble](#vue-densemble)
2. [Navigation et Structure](#navigation-et-structure)
3. [Créer une Nouvelle Documentation](#créer-une-nouvelle-documentation)
4. [Format et Standards](#format-et-standards)
5. [Gestion des Images](#gestion-des-images)
6. [Équations Mathématiques](#équations-mathématiques)
7. [Références et Citations](#références-et-citations)
8. [Déploiement et Publication](#déploiement-et-publication)
9. [Bonnes Pratiques](#bonnes-pratiques)
10. [Dépannage](#dépannage)

---

## Vue d'Ensemble

### Objectif de la Documentation

La documentation Novuus vise à :
- Fournir une documentation complète et standardisée des technologies médicales
- Faciliter la compréhension technique et médicale
- Assurer la traçabilité et la reproductibilité
- Respecter les standards académiques et réglementaires

### Public Cible

- **Chercheurs** : Comprendre les principes scientifiques et techniques
- **Cliniciens** : Évaluer l'applicabilité clinique
- **Développeurs** : Intégrer et étendre les technologies
- **Régulateurs** : Vérifier la conformité et la sécurité
- **Investisseurs** : Évaluer le potentiel commercial

---

## Navigation et Structure

### Structure du Site

```
Page d'Accueil (index.md)
├── Technologies Documentées
│   ├── Système d'Analyse Intelligente
│   └── [Autres technologies...]
├── Template de Documentation
└── Guide d'Utilisation (cette page)
```

### Navigation

- **Page d'accueil** : Vue d'ensemble et liste des technologies
- **Page Technologies** : Liste complète avec filtres et recherche
- **Pages individuelles** : Documentation détaillée de chaque technologie
- **Template** : Modèle pour créer de nouvelles documentations

### Fonctionnalités de Recherche

- Utilisez `Ctrl+F` (Windows/Linux) ou `Cmd+F` (Mac) pour rechercher dans une page
- Les tags et catégories permettent de filtrer les technologies
- La table des matières facilite la navigation dans chaque document

---

## Créer une Nouvelle Documentation

### Étape 1 : Préparation

1. **Copiez le template** :
   ```bash
   cp _template-technologie-medicale.md posts/YYYY-MM-DD-nom-technologie.md
   ```

2. **Nommage du fichier** :
   - Format : `YYYY-MM-DD-nom-technologie.md`
   - Exemple : `2024-01-20-systeme-diagnostic.md`
   - Utilisez des tirets, pas d'espaces ni de caractères spéciaux

### Étape 2 : Configuration du Front Matter

Le front matter (en-tête YAML) est essentiel. Configurez-le ainsi :

```yaml
---
layout: post
title: "Titre Complet de la Technologie"
date: YYYY-MM-DD
categories: [technologies-medicales]
tags: [tag1, tag2, tag3]
math: true  # Activez si vous avez des équations
---
```

**Paramètres importants** :
- `layout: post` : Utilise le layout pour les articles
- `title` : Titre complet et descriptif
- `date` : Date de publication (format ISO : YYYY-MM-DD)
- `categories` : Liste entre crochets (une seule catégorie principale)
- `tags` : Liste de tags séparés par des virgules
- `math: true` : Active MathJax pour les équations mathématiques

### Étape 3 : Remplir le Contenu

Suivez la structure du template section par section :

#### Résumé
- 2-3 phrases maximum
- Objectif principal et importance
- Public cible

#### Introduction
- Contexte médical actuel
- Problèmes identifiés
- Objectifs de la technologie

#### Contexte et Problématique
- Description détaillée du problème
- Limitations des solutions existantes
- Impact potentiel (quantifié si possible)

#### Principe de Fonctionnement
- Concepts scientifiques fondamentaux
- Mécanisme d'action étape par étape
- Innovations clés

#### Architecture Technique
- Liste des composants principaux
- Spécifications techniques
- Diagrammes de flux (si applicable)
- Standards et protocoles utilisés

#### Cas d'Utilisation
- Au moins 2-3 scénarios détaillés
- Contexte, processus, résultats attendus
- Applications cliniques

#### Méthodes d'Évaluation
- Critères d'évaluation (efficacité, sécurité, précision)
- Protocoles d'essai
- Métriques et formules mathématiques

#### Résultats et Performances
- Données quantitatives avec intervalles de confiance
- Tableaux comparatifs
- Analyse statistique

#### Défis et Limitations
- Défis techniques rencontrés
- Limitations actuelles
- Contraintes réglementaires
- Considérations éthiques

#### Perspectives Futures
- Améliorations prévues
- Recherche en cours
- Applications émergentes
- Feuille de route

#### Conclusion
- Synthèse des points clés
- Implications pour la pratique médicale
- Impact attendu

#### Références
- Format académique standard
- Numérotation séquentielle
- Citations complètes

### Étape 4 : Ajouter des Images (Optionnel)

Voir la section [Gestion des Images](#gestion-des-images) ci-dessous.

### Étape 5 : Vérification

Avant de publier, vérifiez :
- [ ] Toutes les sections sont complétées
- [ ] Le front matter est correct
- [ ] Les liens internes fonctionnent
- [ ] Les images sont présentes et référencées correctement
- [ ] Les références sont complètes
- [ ] L'orthographe et la grammaire sont correctes
- [ ] Les données chiffrées sont cohérentes

### Étape 6 : Mise à Jour de l'Index

Ajoutez votre nouvelle technologie dans `index.md` :

```markdown
### [Nom de la Technologie]({{ '/posts/nom-fichier.html' | relative_url }})
*Date de publication : DD mois YYYY*

Description courte en une phrase.
```

---

## Format et Standards

### Format Markdown

La documentation utilise Markdown avec extensions Jekyll :

#### Titres
```markdown
# Titre Principal (H1)
## Section (H2)
### Sous-section (H3)
#### Détail (H4)
```

#### Texte Formaté
```markdown
**Gras** pour l'emphase
*Italique* pour les termes techniques
`Code` pour les références techniques
```

#### Listes
```markdown
- Item 1
- Item 2
  - Sous-item 2.1
  - Sous-item 2.2

1. Item numéroté
2. Item numéroté
```

#### Tableaux
```markdown
| Colonne 1 | Colonne 2 | Colonne 3 |
|-----------|-----------|-----------|
| Donnée 1  | Donnée 2  | Donnée 3  |
```

#### Liens
```markdown
[Texte du lien]({{ '/chemin/vers/page.html' | relative_url }})
[Lien externe](https://example.com)
```

#### Citations de Code
````markdown
```langage
code ici
```
````

### Standards de Rédaction

#### Langage
- **Clarté** : Langage clair et accessible
- **Précision** : Terminologie médicale et technique exacte
- **Concision** : Éviter les répétitions inutiles
- **Objectivité** : Présenter les faits sans exagération

#### Structure
- Utiliser des paragraphes courts (3-5 phrases)
- Utiliser des listes à puces pour les informations structurées
- Utiliser des tableaux pour les données comparatives
- Utiliser des diagrammes pour les concepts complexes

#### Terminologie
- Définir les acronymes à la première utilisation
- Utiliser la terminologie médicale standard
- Fournir des explications pour les concepts complexes

---

## Gestion des Images

### Organisation des Images

Structure recommandée :
```
assets/images/
├── architecture/      # Schémas d'architecture système
├── screenshots/       # Captures d'écran d'interfaces
├── diagrams/          # Diagrammes de flux et processus
├── charts/            # Graphiques et visualisations
└── logos/             # Logos et marques
```

### Ajouter une Image

1. **Placez l'image** dans `assets/images/` (dans le sous-dossier approprié)

2. **Référencez l'image** dans votre Markdown :
   ```markdown
   ![Description de l'image]({{ '/assets/images/nom-image.png' | relative_url }})
   *Légende optionnelle sous l'image*
   ```

3. **Format recommandé** :
   ```markdown
   ![Diagramme de flux de données du système]({{ '/assets/images/diagrams/flux-donnees.png' | relative_url }})
   *Figure 1 : Architecture du flux de données du système d'analyse intelligente*
   ```

### Formats d'Image Supportés

- **PNG** : Pour les diagrammes et schémas (recommandé)
- **JPG/JPEG** : Pour les photos et captures d'écran
- **SVG** : Pour les graphiques vectoriels (meilleure qualité)
- **GIF** : Pour les animations simples

### Bonnes Pratiques

- **Taille** : Optimisez les images (max 1-2 MB)
- **Nommage** : Utilisez des noms descriptifs avec tirets
- **Résolution** : Minimum 72 DPI pour le web, 150-300 DPI pour l'impression
- **Accessibilité** : Toujours inclure un texte alternatif descriptif
- **Légendes** : Ajoutez des légendes pour expliquer le contenu

### Exemple Complet

```markdown
![Architecture du système d'analyse intelligente montrant les modules principaux et leurs interactions]({{ '/assets/images/architecture/systeme-analyse.png' | relative_url }})
*Figure 2 : Architecture modulaire du système d'analyse intelligente avec les quatre composants principaux (Acquisition, Traitement, Analyse IA, Génération de rapports) et leurs interconnexions*
```

---

## Équations Mathématiques

### Activation

Activez MathJax dans le front matter :
```yaml
math: true
```

### Syntaxe LaTeX

#### Équations en Ligne
```markdown
La sensibilité est calculée comme suit : $\text{Sensibilité} = \frac{TP}{TP + FN}$
```

#### Équations Centrées
```markdown
$$
\text{Sensibilité} = \frac{TP}{TP + FN}
$$
```

#### Exemples Complets

**Sensibilité** :
```markdown
$$
\text{Sensibilité} = \frac{TP}{TP + FN}
$$
```

**F1-Score** :
```markdown
$$
F_1 = 2 \times \frac{\text{Précision} \times \text{Sensibilité}}{\text{Précision} + \text{Sensibilité}}
$$
```

**Intervalle de Confiance** :
```markdown
$$
IC_{95\%} = \bar{x} \pm 1.96 \times \frac{\sigma}{\sqrt{n}}
$$
```

### Symboles Courants

- `\alpha`, `\beta`, `\gamma` : Lettres grecques
- `\pm`, `\times`, `\div` : Opérateurs
- `\leq`, `\geq`, `\neq` : Comparaisons
- `\sum`, `\prod`, `\int` : Opérateurs mathématiques
- `\sqrt{x}`, `\sqrt[n]{x}` : Racines
- `\frac{a}{b}` : Fractions

---

## Références et Citations

### Format Standard

Utilisez le format académique standard :

```markdown
1. Auteur, P. (Année). "Titre de l'article." *Nom de la Revue*, Volume(Numéro), Pages.
2. Auteur, P., & Co-auteur, J. (Année). "Titre du livre." *Éditeur*.
3. Organisation. (Année). "Titre du document." URL ou source.
```

### Exemples

**Article scientifique** :
```markdown
1. Smith, J., Johnson, M., & Williams, A. (2023). "Deep Learning for Medical Image Analysis: A Comprehensive Review." *Journal of Medical Imaging*, 45(2), 123-145.
```

**Livre** :
```markdown
2. Chen, L. (2022). *Artificial Intelligence in Healthcare: Principles and Applications*. Academic Press.
```

**Document officiel** :
```markdown
3. FDA. (2023). "Artificial Intelligence and Machine Learning in Software as a Medical Device." FDA Guidance Document. https://www.fda.gov/...
```

**Site web** :
```markdown
4. European Society of Radiology. (2023). "Guidelines for AI in Medical Imaging." *European Radiology*, 33(6), 456-478. https://www.esr.org/...
```

### Citations dans le Texte

Référencez les sources dans le texte :
```markdown
Comme démontré dans l'étude de Smith et al. (2023), les réseaux de neurones...
```

---

## Déploiement et Publication

### Workflow GitHub Actions

Le déploiement est automatique via GitHub Actions :

1. **Commit et Push** :
   ```bash
   git add .
   git commit -m "Ajout documentation nouvelle technologie"
   git push origin main
   ```

2. **Vérification** :
   - Allez dans l'onglet "Actions" de votre dépôt GitHub
   - Vérifiez que le workflow s'exécute correctement
   - Attendez la fin du build (environ 2-5 minutes)

3. **Publication** :
   - Le site est automatiquement mis à jour
   - Disponible à : `https://votre-username.github.io/nom-du-repo/`

### Déploiement Local (Test)

Pour tester localement avant de publier :

```bash
# Installer les dépendances (une seule fois)
bundle install

# Lancer le serveur local
bundle exec jekyll serve

# Ouvrir dans le navigateur
# http://localhost:4000
```

### Vérification Post-Publication

Après publication, vérifiez :
- [ ] La page s'affiche correctement
- [ ] Les images sont visibles
- [ ] Les liens fonctionnent
- [ ] Les équations mathématiques s'affichent
- [ ] La navigation fonctionne
- [ ] Le formatage est correct

---

## Bonnes Pratiques

### Contenu

✅ **À FAIRE** :
- Rédiger de manière claire et accessible
- Fournir des données quantifiables
- Citer toutes les sources
- Utiliser des visuels pour clarifier les concepts complexes
- Maintenir la cohérence avec les autres documentations

❌ **À ÉVITER** :
- Informations non vérifiées
- Exagérations ou promesses non fondées
- Langage trop technique sans explications
- Oublier les références
- Contenu dupliqué

### Technique

✅ **À FAIRE** :
- Suivre la structure du template
- Utiliser le format Markdown correctement
- Optimiser les images
- Tester localement avant de publier
- Vérifier les liens et références

❌ **À ÉVITER** :
- Modifier la structure de base sans raison
- Utiliser du HTML brut (sauf si nécessaire)
- Images trop lourdes
- Liens cassés
- Front matter incorrect

### Médical et Réglementaire

✅ **À FAIRE** :
- Respecter les standards médicaux
- Mentionner les certifications et approbations
- Discuter les limitations et risques
- Fournir des informations sur la sécurité
- Respecter la confidentialité des données

❌ **À ÉVITER** :
- Revendications médicales non approuvées
- Oublier les limitations
- Ignorer les considérations éthiques
- Informations confidentielles de patients

---

## Dépannage

### Problèmes Courants

#### La page ne s'affiche pas

**Solution** :
- Vérifiez que le front matter est correct (syntaxe YAML)
- Vérifiez que le fichier est dans le dossier `posts/`
- Vérifiez que le nom du fichier suit le format `YYYY-MM-DD-nom.md`
- Vérifiez les logs GitHub Actions pour les erreurs

#### Les images ne s'affichent pas

**Solution** :
- Vérifiez le chemin de l'image (doit commencer par `/assets/images/`)
- Vérifiez que l'image existe dans le dépôt
- Vérifiez la syntaxe : `{{ '/assets/images/...' | relative_url }}`
- Vérifiez que l'image est commitée et poussée

#### Les équations mathématiques ne s'affichent pas

**Solution** :
- Vérifiez que `math: true` est dans le front matter
- Vérifiez la syntaxe LaTeX (parenthèses, accolades)
- Vérifiez que MathJax est chargé (voir les logs du navigateur)

#### Les liens ne fonctionnent pas

**Solution** :
- Utilisez `{{ '/chemin/vers/page.html' | relative_url }}` pour les liens internes
- Vérifiez que les pages cibles existent
- Pour les liens vers les posts, utilisez `.html` pas `.md`

#### Erreurs de build GitHub Actions

**Solution** :
- Vérifiez les logs dans l'onglet Actions
- Vérifiez la syntaxe YAML du front matter
- Vérifiez que le Gemfile est correct
- Vérifiez que toutes les dépendances sont disponibles

### Obtenir de l'Aide

Si vous rencontrez des problèmes :

1. **Consultez la documentation** :
   - [README.md]({{ '/README.html' | relative_url }})
   - [QUICKSTART.md]({{ '/QUICKSTART.html' | relative_url }})
   - [STRUCTURE.md]({{ '/STRUCTURE.html' | relative_url }})

2. **Vérifiez les exemples** :
   - [Exemple de technologie]({{ '/posts/exemple-technologie.html' | relative_url }})
   - [Template]({{ '/_template-technologie-medicale.html' | relative_url }})

3. **Contactez l'équipe** :
   - Email : documentation@novuus.com
   - Créez une issue sur GitHub

---

## Ressources Additionnelles

### Documentation Jekyll
- [Documentation officielle Jekyll](https://jekyllrb.com/docs/)
- [Liquid Template Language](https://shopify.github.io/liquid/)

### Markdown
- [Guide Markdown](https://www.markdownguide.org/)
- [Syntaxe GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/)

### MathJax
- [Documentation MathJax](https://docs.mathjax.org/)
- [Référence LaTeX](https://www.latex-project.org/help/documentation/)

---

## Conclusion

Ce guide vous fournit toutes les informations nécessaires pour créer et maintenir la documentation des technologies médicales Novuus. En suivant ces instructions, vous contribuerez à maintenir une documentation de qualité, cohérente et professionnelle.

Pour toute question supplémentaire, n'hésitez pas à consulter les autres ressources ou à contacter l'équipe.

---

*Dernière mise à jour : 20 janvier 2024*

