// importation des fonctions ReadAllCitiesController et ReadOneCityController et de la classe Hono
import { Hono } from 'hono';
import { ReadAllCitiesController } from '../controllers/city/ReadAllCitiesController';
import { ReadOneCityController } from '../controllers/city/ReadOneCityController';

// création de la route cityRoutes qui renvoie la liste de toutes les villes ou une ville en particulier
const cityRoutes = new Hono();
cityRoutes.get('/', ReadAllCitiesController);
cityRoutes.get('/:slug', ReadOneCityController);

// exportation de cityRoutes
export default cityRoutes;
