// importation des fonction ReadOneCityView, translateToCity, translateToParking et de la base de données
import { Context } from 'hono';
import { db } from '../../data/database';
import { ReadOneCityView } from '../../views/city/ReadOneCityView';
import { translateToCity, translateToParking } from '../../utils/SqlTranslator';

// création de la fonction ReadOneCityController qui renvoie une vue HTML avec les informations d'une ville
export const ReadOneCityController = async (c: Context) => {
  // récupération du slug de la ville
  const slug = c.req.param('slug');

  // récupération des données de la base de données
  // la requête SQL permet de sélectionner les colonnes id, name, slug, location, country de la table cities
  // selon le slug de la ville
  const cityData = db.query(`
    SELECT id, name, slug, location, country FROM cities WHERE slug = ?
  `).get(slug) as any;

  // vérifie si la ville existe
  if (!cityData) {
    return c.text("Ville non trouvée", 404);
  }

// transformation des données en instances de City
  const city = translateToCity(cityData);

  // récupération des données de la base de données
  // la requête SQL permet de sélectionner toutes les colonnes de la table parkings
  // selon l'id de la ville
  const parkingsData = db.query(`
    SELECT * FROM parkings WHERE city_id = ?
  `).all(city.id) as any[];

  // transformation des données en instances de Parking
  const parkings = parkingsData.map(translateToParking);

  // création de la vue HTML
  const view = ReadOneCityView({ city, parkings });
  return c.html(view);
};

