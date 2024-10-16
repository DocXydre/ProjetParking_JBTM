import { Hono } from 'hono'
import { HomeController } from '../controllers/HomeController';
import parkingRoutes from '../routes/parkingRoutes';
import cityRoutes from '../routes/cityRoutes';



import { toSlug } from '../utils/toSlug';

const slug = toSlug("Mon exemple de chaîne à convertir!");
console.log(slug); // Affiche: mon-exemple-de-chaine-a-convertir

const app = new Hono()


app.get('/', HomeController)
app.route('/parkings', parkingRoutes);
app.route('/cities', cityRoutes);


export default app