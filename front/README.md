# Fonctionalité ajoutée

Fonctionnalité ajoutée – Détails des changements

À l’origine, l’application permettait uniquement la saisie des informations d’un sondage et la sélection de créneaux via un calendrier, avec une création immédiate du sondage sans étape de validation intermédiaire ni retour utilisateur détaillé.

La fonctionnalité ajoutée introduit un processus de création structuré en plusieurs étapes, comprenant désormais une prévisualisation explicite des données saisies avant l’envoi au serveur, ainsi qu’un écran de résumé final affiché après la création effective du sondage.

Cette séparation améliore la lisibilité du flux, réduit les erreurs de saisie et distingue clairement les phases de validation et de persistance.

De plus, l’intégration avec le backend a été découplée et simulée via une API REST mockée(mockapi.io), permettant de tester et valider le comportement de l’application front-end (gestion des états, transitions entre étapes et affichage des données persistées) sans dépendre du service backend initial.

# Tlcfront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
