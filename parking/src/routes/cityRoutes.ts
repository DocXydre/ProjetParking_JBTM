import { Hono } from 'hono';

const cityRoutes = new Hono();

cityRoutes.get('/', (c) => {
  return c.text('All Cities');
});

export default cityRoutes;
