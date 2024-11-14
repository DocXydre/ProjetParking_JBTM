// importation de homeController, de parkingRoutes et de cityRoutes ect...
import { Hono } from 'hono'
import { HomeController } from './controllers/HomeController';
import parkingRoutes from './routes/parkingRoutes';
import cityRoutes from './routes/cityRoutes';
// on a eu des problèmes avec serveStatic on appel donc la fonction serveStatic de @hono/node-server/serve-static
import { serveStatic } from '@hono/node-server/serve-static';

// création de l'application
const app = new Hono()

// on crée une route pour les données statiques du dossier static
app.use('/static/*', serveStatic({ root: './' }));

// création de la route pour la page d'accueil
app.get('/', HomeController)
// création des routes pour les parkings et les villes
app.route('/parkings', parkingRoutes);
app.route('/cities', cityRoutes);

// exportation de l'application
export default app 

// Affiche dans les logs le message "Serveur lancé sur le port localhost:3000"
console.log('Serveur lancé sur le port localhost:3000')