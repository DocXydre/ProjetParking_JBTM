// importation des fonction ReadAllCitiesController et ReadOneCityController
import { Hono } from 'hono';
import { ReadAllCitiesController } from '../controllers/city/ReadAllCitiesController';
import { ReadOneCityController } from '../controllers/city/ReadOneCityController';

// création de la route cityRoutes qui renvoie la liste de toutes les villes
const cityRoutes = new Hono();
cityRoutes.get('/', ReadAllCitiesController);
cityRoutes.get('/:slug', ReadOneCityController);

// exportation cityRoutes
export default cityRoutes;
