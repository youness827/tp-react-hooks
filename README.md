# TP React Hooks - Application de Gestion de Produits

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (useState, useEffect, useContext) ainsi que la création de Hooks personnalisés.

## Installation et configuration initiale

1. Cloner le dépôt :
```bash
git clone https://github.com/pr-daaif/tp-react-hooks.git
cd tp-react-hooks
```

2. Créer votre propre dépôt sur Github et changer le remote :
```bash
# Supprimer le remote origine
git remote remove origin

# Ajouter votre nouveau remote
git remote add origin https://github.com/[votre-username]/tp-react-hooks.git

# Premier push
git push -u origin main
```

3. Installer les dépendances :
```bash
npm install
```

4. Lancer l'application :
```bash
npm start
```

## Instructions pour le TP

Pour chaque exercice :
1. Lisez attentivement l'énoncé
2. Implémentez la solution
3. Testez votre implémentation (pensez à faire des copies d'écran)
4. Mettez à jour la section correspondante dans ce README avec :
   - Une brève explication de votre solution
   - Des captures d'écran montrant le fonctionnement
   - Les difficultés rencontrées et comment vous les avez résolues
5. Commitez vos changements avec un message descriptif

### Exercice 1 : État et Effets 
#### Objectif : Implémenter une recherche en temps réel

- [ ] 1.1 Modifier le composant ProductSearch pour utiliser la recherche
- [ ] 1.2 Implémenter le debounce sur la recherche
- [ ] 1.3 Documenter votre solution ici

_Votre réponse pour l'exercice 1 :_
Objectif : Implémenter une recherche en temps réel.

1.1 J'ai utilisé la technique du Lifting State Up pour déplacer l'état searchTerm du composant enfant ProductSearch vers le parent App, permettant de partager ce terme avec ProductList, où il est passé sous le nom filteringTerm pour filtrer la liste des produits.

1.2 La technique du debounce est utilisée pour éviter les mises à jour fréquentes lors de la saisie.



### Exercice 2 : Context et Internationalisation
#### Objectif : Gérer les préférences de langue

- [ ] 2.1 Créer le LanguageContext
- [ ] 2.2 Ajouter le sélecteur de langue
- [ ] 2.3 Documenter votre solution ici

_Votre réponse pour l'exercice 2 :_

Objectif : Gérer les préférences de langue.

J'ai ajouté la gestion de la langue en créant un LanguageContext. Ce contexte permet de partager la langue sélectionnée 
![Capture1](https://github.com/user-attachments/assets/673cca92-8e9c-4d54-b4bd-47c890097dd6)
![Capture2](https://github.com/user-attachments/assets/6f2fefc4-05cf-4cb5-8453-205418b3e9b7)


### Exercice 4 : Gestion Asynchrone et Pagination
#### Objectif : Gérer le chargement et la pagination

- [ ] 4.1 Ajouter le bouton de rechargement
- [ ] 4.2 Implémenter la pagination
- [ ] 4.3 Documenter votre solution ici

_Votre réponse pour l'exercice 4 :_

currentPage : Suit le numéro de la page actuelle.
nextPage et previousPage : Modifient currentPage pour naviguer entre les pages, en récupérant les produits correspondants via l'API.
reload : Permet de rafraîchir les produits en fonction de la page actuelle.
![Capture55](https://github.com/user-attachments/assets/d664723e-8989-4982-a199-d977f2d82b2e)
![Capture3](https://github.com/user-attachments/assets/9ce31ce7-7fec-4bf8-96e2-25b876464e8f)
![Capture4](https://github.com/user-attachments/assets/429676c3-5fea-47b3-b5a6-456a14267517)


## Rendu

- Ajoutez l'URL de votre dépôt Github dans  **Classroom** et envoyer la réponse dès le démarage de votre projet.
- Les push doivent se faire au fûr et à mesure que vous avancez dans votre projet.
- Le README.md doit être à jour avec vos réponses et captures d'écran. 
- Chaques exercice doit faire l'objet d'au moins un commit avec un message mentionnant le numéro de l'exercice.
