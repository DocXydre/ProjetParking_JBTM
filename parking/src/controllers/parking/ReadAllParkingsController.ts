import { Context } from 'hono';
import { db } from '../../data/database';
import { ReadAllParkingsView } from '../../views/parking/ReadAllParkingsView';
import { Parking } from '../../models/Parking';

export const ReadAllCitiesController = async (c: Context) => {
  // Récupération des villes depuis la base de données SQLite avec un cast explicite
  const parkings = db.query(`
    SELECT id, name, location, numberOfPlaces, opened, hourlyRate, city_id FROM parkings
  `).all() as Parking[];

  // Passer les villes à la vue
  const view = ReadAllParkingsView({ parkings });
  return c.html(view);
};

