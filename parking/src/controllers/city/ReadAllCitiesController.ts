// importation des fonction ReadAllCitiesView, translateToCity, dy type cityData et de la base de données
import { Context } from 'hono';
import { db } from '../../data/database';
import { ReadAllCitiesView } from '../../views/city/ReadAllCitiesView';
import { translateToCity, CityData } from '../../utils/SqlTranslator';

// création de la fonction ReadAllCitiesController qui renvoie  une vue HTML avec la liste de toutes les villes
export const ReadAllCitiesController = async (c: Context) => {
  // recuperation des données de la base de données 
  // la requete SQL permet de selectionner les colonnes id, name, slug, location, country de la table cities
  const citiesData = db.query(`
    SELECT id, name, slug, location, country FROM cities
  `).all() as CityData[];

  // transformation des données en instances de City
  const cities = citiesData.map(translateToCity);

  // création de la vue HTML
  const view = ReadAllCitiesView({ cities });
  return c.html(view);
};





