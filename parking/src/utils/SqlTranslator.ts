import { City } from '../models/City';
import { Parking } from '../models/Parking';
import { GPS } from '../types/GPS';

// Type des données SQL pour la table `cities`
export type CityData = {
  id: number;
  name: string;
  slug: string;
  location: string;
  country: string;
};

// Type des données SQL pour la table `parkings`
export type ParkingData = {
  id: number;
  name: string;
  location: string;
  numberOfPlaces: number;
  opened: boolean;
  hourlyRate: number;
  city_id: number;
};

// Fonction pour convertir les données SQL en instance de `City`
export function translateToCity(data: CityData): City {
  const [latitude, longitude] = data.location.split(',').map(Number);
  const location: GPS = { latitude, longitude };

  const city = new City(data.name, data.country, location);
  city.id = data.id;
  city.slug = data.slug;

  return city;
}

// Fonction pour convertir les données SQL en instance de `Parking`
export function translateToParking(data: ParkingData): Parking {
  const [latitude, longitude] = data.location.split(',').map(Number);
  const location: GPS = { latitude, longitude };

  const parking = new Parking(data.name, data.city_id, location, data.numberOfPlaces, data.opened, data.hourlyRate);
  parking.id = data.id;

  return parking;
}
