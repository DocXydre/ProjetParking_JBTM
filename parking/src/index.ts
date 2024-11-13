import { Hono } from 'hono'
import { HomeController } from './controllers/HomeController';
import parkingRoutes from './routes/parkingRoutes';
import cityRoutes from './routes/cityRoutes';
import { serveStatic } from 'hono/bun';
import { staticDatabase } from './data/staticDatabase';

const app = new Hono()
const cities = staticDatabase.cities;
const parkings = staticDatabase.parkings;

app.use("/static/*", serveStatic({ root: "./" }));

app.get('/', HomeController)
app.route('/parkings', parkingRoutes);
app.route('/cities', cityRoutes);

export default app 