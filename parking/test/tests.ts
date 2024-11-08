import { Hono } from 'hono'
import { toSlug } from '../src/utils/toSlug'; // importation de toSlug
import {generateRandomNumberId} from '../src/utils/generateRandomNumberId'; // importation de generateRandomNumber

//Test des méthodes de toSlug
const slug = toSlug("Un exemple de chaîne à < convertir ! *");
console.log(slug); // Affiche: mon-exemple-de-chaine-a-convertir

//Test de la méthode de genrateRandomNumberId
const gnrtNbr = generateRandomNumberId();
console.log("Nombre généré : "+ gnrtNbr);
