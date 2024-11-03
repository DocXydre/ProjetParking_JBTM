import { Context } from 'hono';
import { db } from '../../data/database';
import { ReadAllParkingsView } from '../../views/parking/ReadAllParkingsView';
import { translateToParking } from '../../utils/SqlTranslator';

export const ReadAllParkingsController = async (c: Context) => {
  // Requête SQL pour récupérer tous les parkings
  const parkingsData = db.query(`
    SELECT id, name, location, numberOfPlaces, opened, hourlyRate, city_id FROM parkings
  `).all() as any[];

  // Transformation des données SQL en instances de `Parking`
  const parkings = parkingsData.map(translateToParking);

  // Passer les parkings à la vue
  const view = ReadAllParkingsView({ parkings });
  return c.html(view);
};


