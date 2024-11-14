// importation des fonction ReadOneParkingView, translateToParking et de la base de données
import { Context } from 'hono';
import { db } from '../../data/database';
import { ReadOneParkingView } from '../../views/parking/ReadOneParkingView';
import { translateToParking } from '../../utils/SqlTranslator';

// création de la fonction ReadOneParkingController qui renvoie une vue HTML avec les informations d'un parking
export const ReadOneParkingController = async (c: Context) => {
  // récupération de l'id du parking
  const id = Number(c.req.param('id'));

  // récupération des données de la base de données
  // la requête SQL permet de sélectionner les colonnes id, name, location, numberOfPlaces, opened, hourlyRate, city_id de la table parkings
  // selon l'id du parking
  const parkingData = db.query(`
    SELECT id, name, location, numberOfPlaces, opened, hourlyRate, city_id FROM parkings WHERE id = ?
  `).get(id) as any;

  // vérifie si le parking existe
  if (!parkingData) {
    return c.text("Parking non trouvé", 404);
  }

  // transformation des données en instances de Parking
  const parking = translateToParking(parkingData);

  // création de la vue HTML
  const view = ReadOneParkingView({ parking });
  return c.html(view);
};
