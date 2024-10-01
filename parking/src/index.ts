import { Hono } from 'hono'

import { toSlug } from '../src/utils/toSlug';

const slug = toSlug("Mon exemple de chaîne à convertir!");
console.log(slug); // Affiche: mon-exemple-de-chaine-a-convertir

