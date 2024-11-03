import { Context } from 'hono';
import { db } from '../../data/database';
import { ReadAllCitiesView } from '../../views/city/ReadAllCitiesView';
import { translateToCity, CityData } from '../../utils/SqlTranslator';

export const ReadAllCitiesController = async (c: Context) => {
  // Récupération des données SQL
  const citiesData = db.query(`
    SELECT id, name, slug, location, country FROM cities
  `).all() as CityData[];

  // Transformation des données en instances de `City`
  const cities = citiesData.map(translateToCity);

  // Passer les villes à la vue
  const view = ReadAllCitiesView({ cities });
  return c.html(view);
};





