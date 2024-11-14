// importation de homeController, de la base de données staticDatabase et des routes parkingRoutes et cityRoutes
import { Hono } from 'hono'
import { HomeController } from './controllers/HomeController';
import parkingRoutes from './routes/parkingRoutes';
import cityRoutes from './routes/cityRoutes';
// on a eu des problèmes avec serveStatic on appel donc la fonction serveStatic de @hono/node-server/serve-static
import { serveStatic } from '@hono/node-server/serve-static';
import { staticDatabase } from './data/staticDatabase';

// création de l'application Hono
const app = new Hono()
// on importe les données statiques de la base de données
const cities = staticDatabase.cities;
const parkings = staticDatabase.parkings;

// on crée une route pour afficher les données statiques du dossier static
app.use("/static/*", serveStatic({ root: "./" }));

// on crée une route pour afficher les données statiques de la base de données
app.get('/', HomeController)
app.route('/parkings', parkingRoutes);
app.route('/cities', cityRoutes);

// on exporte l'application
export default app

// Affiche dans les logs le message "Serveur lancé sur le port localhost:3000"
console.log('Serveur lancé sur le port localhost:3000')