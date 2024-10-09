// classe Parking avec comme attributs id, name, city_id, location, numberOfSpots, opened, hourlyRate et parkIds

import { generateRandomNumberId } from '../utils/generateRandomNumberId';
import { GPS } from '../types/GPS';

export class Parking {
  id: number;
  name: string;
  city_id: number;
  location: GPS;
  numberOfSpots: number;
  opened: boolean;
  hourlyRate: number;
  parkIds: number[];

  constructor(name: string, city_id: number, location: GPS, numberOfSpots: number, opened: boolean, hourlyRate: number) {
    this.id = generateRandomNumberId();
    this.name = name;
    this.city_id = city_id;
    this.location = location;
    this.numberOfSpots = numberOfSpots;
    this.opened = opened;
    this.hourlyRate = hourlyRate;
    this.parkIds = [];
  }
  //installation etape 3
  //cliquer sur le lien
  //sqlite3
  //dowload les 2
  //lancer sqllite 3
  //variable d'environnement
  //path
  //modifier nouveau lien vers le dossier qui a les fichiers
  //aller dans le dossier de travail 
  //ouvrir un terminal et faire la commande sqlite3 ./parking.sqlite
}