// importation des fonction ReadAllParkingsController et ReadOneParkingController et de la classe Hono
import { Hono } from 'hono';
import { ReadAllParkingsController } from '../controllers/parking/ReadAllParkingsController';
import { ReadOneParkingController } from '../controllers/parking/ReadOneParkingController';

// création de la route parkingRoutes qui renvoie la liste de tous les parkings ou un parking en particulier
const parkingRoutes = new Hono();
parkingRoutes.get('/', ReadAllParkingsController);
parkingRoutes.get('/:id', ReadOneParkingController);

// exportation parkingRoutes
export default parkingRoutes;
