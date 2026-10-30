# GENERATEUR DE QR CODE AVEC NODE.JS

## 1. Présentation du projet

Ce projet consiste à développer une application web
permettant de générer un QR Code à partir d'une URL
(adresse d'un site web).

L'utilisateur saisit l'adresse URL dans un champ de
formulaire puis clique sur le bouton "Générer".
L'application crée automatiquement un QR Code
correspondant à cette adresse.

## 2. Objectif du projet

L'objectif principal est de faciliter l'accès à un site web
grâce à un QR Code que l'utilisateur peut scanner avec
son téléphone.

## 3. Technologies utilisées

- Node.js : environnement d'exécution JavaScript.
- Express.js : création et gestion du serveur web.
- HTML5 : structure de la page web.
- CSS3 : mise en forme du formulaire.
- JavaScript : gestion des interactions avec l'utilisateur.
- QRCode : bibliothèque utilisée pour générer les QR Codes.

## 4. Structure du projet

```text
001/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── README.md
├── package.json
└── package-lock.json
```

## 5. Étapes de réalisation du projet

### Étape 1 : Création du dossier

Création d'un dossier nommé 001 pour contenir
tous les fichiers du projet.

### Étape 2 : Initialisation de Node.js

Exécution de la commande :

npm init -y

Cette commande permet de créer le fichier package.json.

### Étape 3 : Installation des dépendances

Exécution de la commande :

npm install express qrcode

Express permet de créer le serveur et QRCode permet
de générer les codes QR.

### Étape 4 : Création du serveur

Création du fichier server.js.

Ce fichier permet de :
- Créer une application Express.
- Configurer les middlewares.
- Recevoir l'URL envoyée par l'utilisateur.
- Générer le QR Code avec la bibliothèque QRCode.
- Renvoyer le résultat au navigateur.

### Étape 5 : Création de la page HTML

Création du fichier index.html.

Cette page contient :
- Un titre.
- Un champ de saisie pour l'URL.
- Un bouton Générer.
- Une zone d'affichage du QR Code.

### Étape 6 : Mise en forme avec CSS

Création du fichier style.css pour améliorer
l'apparence du formulaire et faciliter son utilisation.

### Étape 7 : Gestion des événements JavaScript

Création du fichier script.js.

Ce fichier permet de :
- Récupérer l'URL saisie.
- Détecter l'envoi du formulaire.
- Envoyer l'URL au serveur avec fetch().
- Recevoir le QR Code généré.
- Afficher le résultat sur la page.

## 6. Installation et lancement du projet

Pour exécuter le projet, suivre les étapes suivantes :

1. Ouvrir le dossier du projet dans Visual Studio Code.
2. Ouvrir le terminal.
3. Installer les dépendances avec :

npm install

4. Démarrer le serveur avec :

npm start

5. Ouvrir un navigateur web et accéder à :

http://localhost:3000

## 7. Fonctionnement de l'application

1. L'utilisateur ouvre l'application.
2. Il saisit l'adresse URL du site web.
3. Il clique sur le bouton Générer.
4. Le serveur reçoit l'adresse URL.
5. La bibliothèque QRCode génère le QR Code.
6. Le QR Code s'affiche dans le navigateur.

## 8. Résultat attendu

L'application permet de transformer une adresse URL
en QR Code afin de faciliter l'accès au site web.

## 9. Conclusion

La réalisation de ce projet nous a permis de découvrir
Node.js, Express.js et l'utilisation d'une bibliothèque
externe pour générer des QR Codes.

Ce projet nous a également permis de mettre en pratique
les connaissances en HTML, CSS et JavaScript.