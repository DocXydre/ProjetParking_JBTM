// importation de la fonction ReadOneParkingView, la base de données statique staticDatabase et du contexte Context
import { Context } from 'hono';
import { staticDatabase } from '../../data/staticDatabase';
import { ReadOneParkingView } from '../../views/parking/ReadOneParkingView';

// création du contrôleur ReadOneParkingController qui renvoie une vue HTML avec un parking
export const ReadOneParkingController = (c: Context) => {
  // récupération de l'id du parking à partir des paramètres
  const id = parseInt(c.req.param('id'), 10);
  // recherche du parking dans la base de données statique
  const parking = staticDatabase.parkings.find(parking => parking.id === id);

  if (!parking) {
    return c.text('Parking not found', 404);
  }

  return c.html(ReadOneParkingView({ parking }));
};
