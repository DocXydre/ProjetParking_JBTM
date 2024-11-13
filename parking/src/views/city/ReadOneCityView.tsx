import { Layout } from '../shared/Layout';
import { html } from 'hono/html';

type City = { name: string; country: string };
type Parking = { id : number, name: string; hourlyRate: number };

const ParkingLink = ({ parking }: { parking: Parking }) => html`
  <li><a href="/parkings/${parking.id}">${parking.name} - €${parking.hourlyRate}/hour</a></li>
`;


const ParkingList = ({ parkings }: { parkings: Array<Parking> }) => html`
  <ul>
  ${parkings.map(parking => ParkingLink({ parking }))}
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
