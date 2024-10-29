import { Layout } from '../shared/Layout';
import { html } from 'hono/html';

type Parking = { id: number; name: string };

const ParkingLink = ({ parking }: { parking: Parking }) => html`
  <li><a href="/parkings/${parking.id}">${parking.name}</a></li>
`;

const ParkingList = ({ parkings }: { parkings: Array<Parking> }) => html`
  <ul>
    ${parkings.map(parking => ParkingLink({ parking }))}
  </ul>
`;

export const ReadAllParkingsView = ({ parkings }: { parkings: Array<Parking> }) => html`
  ${Layout({
    pageTitle: 'All Parkings',
    children: html`
      <h1>List of Parkings</h1>
      ${ParkingList({ parkings })}
    `,
  })}
`;
