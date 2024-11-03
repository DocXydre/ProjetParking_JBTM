import { Context } from 'hono';
import { db } from '../../data/database';
import { ReadOneCityView } from '../../views/city/ReadOneCityView';
import { translateToCity, translateToParking } from '../../utils/SqlTranslator';

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

// Transformation des données SQL en instance de `City`
  const city = translateToCity(cityData);

  // On récupère également les parkings associés à cette ville
  const parkingsData = db.query(`
    SELECT * FROM parkings WHERE city_id = ?
  `).all(city.id) as any[];

  // Transformation des données SQL en instances de `Parking`
  const parkings = parkingsData.map(translateToParking);

  // Passer la ville et les parkings à la vue
  const view = ReadOneCityView({ city, parkings });
  return c.html(view);
};

