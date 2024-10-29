import { Layout } from '../shared/Layout';
import { html } from 'hono/html';

type City = { name: string; slug: string };

const CityLink = ({ city }: { city: City }) => html`
  <li><a href="/cities/${city.slug}">${city.name}</a></li>
`;

const CitiesList = ({ cities }: { cities: Array<City> }) => html`
  <ul>
    ${cities.map(city => CityLink({ city }))}
  </ul>
`;

export const ReadAllCitiesView = ({ cities }: { cities: Array<City> }) => html`
  ${Layout({
    pageTitle: 'All Cities',
    children: html`
      <h1>List of Cities</h1>
      ${CitiesList({ cities })}
    `,
  })}
`;
