import { Context } from 'hono';
import { staticDatabase } from '../../data/staticDatabase';
import { ReadAllCitiesView } from '../../views/city/ReadAllCitiesView';

export const ReadAllCitiesController = (c: Context) => {
  const view = ReadAllCitiesView({ cities: staticDatabase.cities });
  return c.html(view);
};








