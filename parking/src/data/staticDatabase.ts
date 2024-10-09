// création d'une base de données statique

// importation du type GPS
import { GPS } from '../types/GPS';
// importation de la classe City
import { City } from '../models/City';
// importation de la classe Parking
import { Parking } from '../models/Parking';

// création d'une base de données statique

// création des villes
const aixEnProvence = new City("Aix-en-Provence", "France", { latitude: 43.533329, longitude: 5.43333 });
const laSpezia = new City("La Spezia", "Italie", { latitude: 44.238366, longitude: 9.6912326 });
const aixLaChapelle = new City("Aix-la-Chapelle", "Allemagne", { latitude: 50.776351, longitude: 6.083862 });
const sanCristobal = new City("San Cristóbal de La Laguna", "Espagne", { latitude: 28.487180709838867, longitude: -16.313879013061523 });
const newcastle = new City("Newcastle upon Tyne", "Angleterre", { latitude: 54.9738474, longitude: -1.6131572 });

// création des parkings
const parkings = [
    new Parking("Parking A", aixEnProvence.id, { latitude: 43.533329, longitude: 5.43333 }, 100, true, 4.5),
    new Parking("Parking B", laSpezia.id, { latitude: 44.238366, longitude: 9.6912326 }, 50, true, 3),
    new Parking("Parking C", laSpezia.id, { latitude: 44.238366, longitude: 9.6912326 }, 80, true, 2.5),
    new Parking("Parking D", aixLaChapelle.id, { latitude: 50.776351, longitude: 6.083862 }, 40, true, 2.8),
    new Parking("Parking E", sanCristobal.id, { latitude: 28.487180709838867, longitude: -16.313879013061523 }, 70, true, 3.1),
    new Parking("Parking F", newcastle.id, { latitude: 54.9738474, longitude: -1.6131572 }, 60, true, 2.4),
    new Parking("Parking G", newcastle.id, { latitude: 54.9738474, longitude: -1.6131572 }, 90, true, 3.2),
  ];

// exportation de la base de données statique
    export const staticDatabase = {
    cities: [aixEnProvence, laSpezia, aixLaChapelle, sanCristobal, newcastle],
    parkings: parkings,
  };
