// importation des fonction ReadAllParkingsView, translateToParking et de la base de données
import { Context } from 'hono';
import { db } from '../../data/database';
import { ReadAllParkingsView } from '../../views/parking/ReadAllParkingsView';
import { translateToParking } from '../../utils/SqlTranslator';

// création de la fonction ReadAllParkingsController qui renvoie une vue HTML avec la liste de tous les parkings
export const ReadAllParkingsController = async (c: Context) => {
  // récupération des données de la base de données
  // la requête SQL permet de sélectionner toutes les colonnes de la table park
  const parkingsData = db.query(`
    SELECT id, name, location, numberOfPlaces, opened, hourlyRate, city_id FROM parkings
  `).all() as any[];

  // transformation des données en instances de Parking
  const parkings = parkingsData.map(translateToParking);

  // création de la vue HTML
  const view = ReadAllParkingsView({ parkings });
  return c.html(view);
};


