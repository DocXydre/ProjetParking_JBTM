import { Hono } from 'hono';

const parkingRoutes = new Hono();

parkingRoutes.get('/', (c) => {
  return c.text('All Parkings');
});

export default parkingRoutes;
