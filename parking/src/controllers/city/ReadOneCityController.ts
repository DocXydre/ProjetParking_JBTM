import { Context } from 'hono';
import { db } from '../../data/database';
import { ReadOneCityView } from '../../views/city/ReadOneCityView';
import { City } from '../../models/City';

export const ReadOneCityController = async (c: Context) => {
  // Récupère le slug de la ville à partir des paramètres de la requête
  const slug = c.req.param('slug');

  // Requête SQL pour récupérer la ville par son slug
  const cityData = db.query(`
    SELECT id, name, slug, location, country FROM cities WHERE slug = ?
  `).get(slug) as any;

  // Vérifie si la ville existe
  if (!cityData) {
    return c.text("Ville non trouvée", 404);
  }

  // Transformation des données SQL en une instance de City
  const city = new City(cityData.name, cityData.country, cityData.location);
  city.id = cityData.id;
  city.slug = cityData.slug;

  // On récupère également les parkings associés à cette ville
  const parkings = db.query(`
    SELECT * FROM parkings WHERE city_id = ?
  `).all(city.id) as any[];

  // Passer la ville et les parkings à la vue
  const view = ReadOneCityView({ city, parkings });
  return c.html(view);
};

