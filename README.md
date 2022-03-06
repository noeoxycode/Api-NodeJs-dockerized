PROJET DOCKERIZE EVERYTHING!


Choix du sujet : API REST

Technologies utilisées : node, mySQL, Docker, express



Fonctionnalités de l’application :
Création d'un conteneur mysql et d'un conteneur node communiquant entre eux.
Le serveur node fonctionne avec express sur le port 3000.
La base de donnée est composée d'une table book qui contient toutes les données de livres.
Lors de la création des conteneurs via docker compose, une base de donnée est crée avec des données définies dans src/dockerDb/data/dump.sql
Les différentes requêtes possibles :
- création d'un livre
- affichage d'un livre en donnant son ISBN
- affichage de tous les livres
- modification d'un livre
- suppression d'un livre en donnant son ISBN
- suppression de tous les livres [attention]

Lien vers le postman api Library pour simuler les requêtes : le corps de requête est d'ores et déjà fournis mais peut être modifié à volonté.
https://app.getpostman.com/join-team?invite_code=76607e42adc8bb4f0be41d6bd26089b5&target_code=9237ba88e72b3502ff278f9460d447c0

Lien vers un endPoint de test :
http://localhost:3000/


Contribuer :
Pré-requis : avoir docker installé et opérationnel
Utiliser la commande ci-dessous à la racine du projet :
docker-compose up --build


Versioning
Le workflow utilisé est Feature branch.
Ce choix semble être le plus pertinent car il s'agit d'un projet qui possède de multiples petites fonctionnalités à ajouter.
Il semble donc pertinent d'isoler chaque ajout de fonction afin de retracer la source d'un potentiel bug.
Le merge des feature branch s'effectue à l'aide de pull request.

Méthode de travail :
Le code a été rédigé exclusivement avec le compte gitHub noe@marleix.com via l'outil codeWithMe de la suite jetBrain.
