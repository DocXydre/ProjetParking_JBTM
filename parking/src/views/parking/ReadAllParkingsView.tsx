// importation de layout et html
import { Layout } from '../shared/Layout';
import { html } from 'hono/html';

// création du type Parking avec comme attributs id et name
type Parking = { id: number; name: string };

// création de la fonction ParkingLink avec comme paramètre parking
// qui retourne un lien vers la page du parking
const ParkingLink = ({ parking }: { parking: Parking }) => html`
  <li><a href="/parkings/${parking.id}">${parking.name}</a></li>
`;

// création de la fonction ParkingList avec comme paramètre parkings
// qui retourne une liste de liens vers les pages des parkings
const ParkingList = ({ parkings }: { parkings: Array<Parking> }) => html`
  <ul>
    ${parkings.map(parking => ParkingLink({ parking }))}
  </ul>
`;

// création de la fonction ReadAllParkingsView avec comme paramètre parkings
// qui retourne une vue HTML avec la liste de tous les parkings grace a Layout
export const ReadAllParkingsView = ({ parkings }: { parkings: Array<Parking> }) => html`
  ${Layout({
    pageTitle: 'All Parkings',
    children: html`
      <h1>List of Parkings</h1>
      ${ParkingList({ parkings })}
    `,
  })}
`;
