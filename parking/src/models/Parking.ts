// classe Parking avec comme attributs id, name, city_id, location, numberOfSpots, opened, hourlyRate et parkIds

// importation de la fonction generateRandomNumberId, du type GPS et de la classe Spot
import { generateRandomNumberId } from '../utils/generateRandomNumberId';
import { GPS } from '../types/GPS';
import { Spot } from './Spot';

// création de la classe Parking qu'on exporte
export class Parking {
  id: number;
  name: string;
  city_id: number;
  location: GPS;
  numberOfSpots: number;
  opened: boolean;
  hourlyRate: number;
  parkIds: number[];

// constructeur de la classe Parking avec comme paramètres name, city_id, location,
  constructor(name: string, city_id: number, location: GPS, numberOfSpots: number, opened: boolean, hourlyRate: number) {
    this.id = generateRandomNumberId();
    this.name = name;
    this.city_id = city_id;
    this.location = location;
    this.numberOfSpots = numberOfSpots;
    this.opened = opened;
    this.hourlyRate = hourlyRate;
    this.parkIds = [];

    // génération automatique des spots
    for (let i = 0; i < numberOfSpots; i++) {
      const spot = new Spot(this.id);
      this.parkIds.push(spot.id); 
    }
  }
}