// importation de la fonction ReadAllCitiesView, la base de données statique staticDatabase et du contexte Context
import { Context } from 'hono';
import { staticDatabase } from '../../data/staticDatabase';
import { ReadAllCitiesView } from '../../views/city/ReadAllCitiesView';

// création du contrôleur ReadAllCitiesController qui renvoie une vue HTML avec la liste de toutes les villes
export const ReadAllCitiesController = (c: Context) => {
  // création de la vue avec la liste de toutes les villes grace à la fonction ReadAllCitiesView
  const view = ReadAllCitiesView({ cities: staticDatabase.cities });
  return c.html(view);
};








