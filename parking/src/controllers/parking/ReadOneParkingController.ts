import { Context } from 'hono';
import { db } from '../../data/database';
import { ReadOneParkingView } from '../../views/parking/ReadOneParkingView';
import { translateToParking } from '../../utils/SqlTranslator';

export const ReadOneParkingController = async (c: Context) => {
  // Récupère l'id du parking à partir des paramètres de la requête
  const id = Number(c.req.param('id'));

  // Requête SQL pour récupérer le parking par son id
  const parkingData = db.query(`
    SELECT id, name, location, numberOfPlaces, opened, hourlyRate, city_id FROM parkings WHERE id = ?
  `).get(id) as any;

  // Vérifie si le parking existe
  if (!parkingData) {
    return c.text("Parking non trouvé", 404);
  }

  // Transformation des données SQL en instance de `Parking`
  const parking = translateToParking(parkingData);

  // Passer le parking et la ville à la vue
  const view = ReadOneParkingView({ parking });
  return c.html(view);
};
