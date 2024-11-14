// importation de la fonction layout et de html
import { Layout } from '../shared/Layout';
import { html } from 'hono/html';

// création du type City avec comme attributs name et slug
type City = { name: string; slug: string };

// création de la fonction CityLink avec comme paramètre city
// qui retourne un lien vers la page de la ville
const CityLink = ({ city }: { city: City }) => html`
  <li><a href="/cities/${city.slug}">${city.name}</a></li>
`;

// création de la fonction CitiesList avec comme paramètre cities
// qui retourne une liste de liens vers les pages des villes
const CitiesList = ({ cities }: { cities: Array<City> }) => html`
  <ul>
    ${cities.map(city => CityLink({ city }))}
  </ul>
`;

// création de la fonction ReadAllCitiesView avec comme paramètre cities
// qui retourne une vue HTML avec la liste de toutes les villes grace a Layout
export const ReadAllCitiesView = ({ cities }: { cities: Array<City> }) => html`
  ${Layout({
    pageTitle: 'All Cities',
    children: html`
      <h1>List of Cities</h1>
      ${CitiesList({ cities })}
    `,
  })}
`;
