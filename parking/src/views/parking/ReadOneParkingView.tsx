// importation de layout et html
import { Layout } from '../shared/Layout';
import { html } from 'hono/html';

// création du type Parking avec comme attributs name, numberOfSpots et hourlyRate
type Parking = { name: string; numberOfSpots: number; hourlyRate: number };

// création de la fonction ReadOneParkingView avec comme paramètre parking
// qui retourne une vue HTML avec le parking grace a Layout
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
