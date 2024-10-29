import { Layout } from '../shared/Layout';
import { html } from 'hono/html';

type City = { name: string; country: string };
type Parking = { name: string; hourlyRate: number };

const ParkingList = ({ parkings }: { parkings: Array<Parking> }) => html`
  <ul>
    ${parkings.map(parking => html`<li>${parking.name} - €${parking.hourlyRate}/hour</li>`)}
  </ul>
`;

export const ReadOneCityView = ({ city, parkings }: { city: City; parkings: Array<Parking> }) => html`
  ${Layout({
    pageTitle: `City of ${city.name}`,
    children: html`
      <h1>${city.name}</h1>
      <h2>${city.country}</h2>
      <h3>Available Parkings:</h3>
      ${ParkingList({ parkings })}
    `,
  })}
`;
