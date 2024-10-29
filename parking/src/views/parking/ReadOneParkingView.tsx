import { Layout } from '../shared/Layout';
import { html } from 'hono/html';

type Parking = { name: string; numberOfSpots: number; hourlyRate: number };

export const ReadOneParkingView = ({ parking }: { parking: Parking }) => html`
  ${Layout({
    pageTitle: `Parking: ${parking.name}`,
    children: html`
      <h1>${parking.name}</h1>
      <p>Number of Spots: ${parking.numberOfSpots}</p>
      <p>Hourly Rate: €${parking.hourlyRate}</p>
    `,
  })}
`;
