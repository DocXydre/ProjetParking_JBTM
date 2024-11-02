import { Context } from 'hono';
import { db } from '../../data/database';
import { ReadAllCitiesView } from '../../views/city/ReadAllCitiesView';
import { City } from '../../models/City';

export const ReadAllCitiesController = async (c: Context) => {
  // Récupération des villes depuis la base de données SQLite avec un cast explicite
  const cities = db.query(`
    SELECT id, name, slug, location, country FROM cities
  `).all() as City[];

  // Passer les villes à la vue
  const view = ReadAllCitiesView({ cities });
  return c.html(view);
};









