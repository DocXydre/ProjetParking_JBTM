// importation de la fonction ReadAllParkingsView, la base de données statique staticDatabase et du contexte Context
import { Context } from 'hono';
import { staticDatabase } from '../../data/staticDatabase';
import { ReadAllParkingsView } from '../../views/parking/ReadAllParkingsView';

// création du contrôleur ReadAllParkingsController qui renvoie une vue HTML avec la liste de tous les parkings
export const ReadAllParkingsController = (c: Context) => {
    // création de la vue avec la liste de tous les parkings grace à la fonction ReadAllParkingsView
    const view = ReadAllParkingsView({ parkings: staticDatabase.parkings });
return c.html(view);
};
