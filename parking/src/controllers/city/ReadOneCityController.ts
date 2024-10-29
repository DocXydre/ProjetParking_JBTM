import { Context } from 'hono';
import { staticDatabase } from '../../data/staticDatabase';
import { ReadOneCityView } from '../../views/city/ReadOneCityView';

export const ReadOneCityController = (c: Context) => {
  const slug = c.req.param('slug');
  const city = staticDatabase.cities.find(city => city.slug === slug);

  if (!city) {
    return c.text('City not found', 404);
  }

  const cityParkings = staticDatabase.parkings.filter(parking => parking.city_id === city.id);
  return c.html(ReadOneCityView({ city, parkings: cityParkings }));
};

