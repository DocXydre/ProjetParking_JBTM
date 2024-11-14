To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

# Projet Parking - TD 03

## Équipe
- Thomas Mathis
- Justin Burr

## Epics et User Stories
- Le code a été fait et commenté par Thomas Mathis, Justin a créé les tests
- Il y a une modification par rapport au code du tp pour la page d'accueil pour bien faire une liste 

## Instalation spécial 
- On n'arrivait pas à afficher la photo donc on utilise ça : import { serveStatic } from '@hono/node-server/serve-static'; 

Il faut faire au cas ou si la photo ne s'affiche pas :
```sh
bun add @hono/node-server
 ```



open http://localhost:3000
