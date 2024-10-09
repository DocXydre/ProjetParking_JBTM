import { Hono } from 'hono'

import { toSlug } from '../utils/toSlug';

const slug = toSlug("Mon exemple de chaîne à convertir!");
console.log(slug); // Affiche: mon-exemple-de-chaine-a-convertir

const app = new Hono()
app.get('/', (c) => c.text('Hello Bun!'))

export default app