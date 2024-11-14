// importation de layout et html
import { Layout } from '../shared/Layout';
import { html } from 'hono/html';

// création du type City avec comme attributs name et country
type City = { name: string; country: string };
// création du type Parking avec comme attributs id, name et hourlyRate
type Parking = { id : number, name: string; hourlyRate: number };

// création de la fonction ParkingLink avec comme paramètre parking
// qui retourne un lien vers la page du parking
const ParkingLink = ({ parking }: { parking: Parking }) => html`
  <li><a href="/parkings/${parking.id}">${parking.name} - €${parking.hourlyRate}/hour</a></li>
`;

// création de la fonction ParkingList avec comme paramètre parkings
// qui retourne une liste de liens vers les pages des parkings
const ParkingList = ({ parkings }: { parkings: Array<Parking> }) => html`
  <ul>
  ${parkings.map(parking => ParkingLink({ parking }))}
  </ul>
`;
// création de la fonction ReadOneCityView avec comme paramètre city et parkings
// qui retourne une vue HTML avec la ville et les parkings grace a Layout
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
