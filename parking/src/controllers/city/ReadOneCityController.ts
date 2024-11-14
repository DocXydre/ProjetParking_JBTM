// importation de la fonction ReadOneCityView, la base de données statique staticDatabase et du contexte Context
import { Context } from 'hono';
import { staticDatabase } from '../../data/staticDatabase';
import { ReadOneCityView } from '../../views/city/ReadOneCityView';

// création du contrôleur ReadOneCityController qui renvoie une vue HTML avec une ville
export const ReadOneCityController = (c: Context) => {
  const slug = c.req.param('slug');
  const city = staticDatabase.cities.find(city => city.slug === slug);

  // renvoie un message d'erreur si la ville n'est pas trouvée
  if (!city) {
    return c.text('City not found', 404);
  }

  // recherche des parkings de la ville dans la base de données statique
  const cityParkings = staticDatabase.parkings.filter(parking => parking.city_id === city.id);
  // renvoie la vue HTML avec la ville et les parkings
  return c.html(ReadOneCityView({ city, parkings: cityParkings }));
};

