// classe City avec comme attributs id, name, slug, parkingsIds, country et location

// importation de la fonction generateRandomNumberId et de la fonction toSlug et du type GPS
import { generateRandomNumberId } from '../utils/generateRandomNumberId';
import { toSlug } from '../utils/toSlug';
import { GPS } from '../types/GPS';

// création de la classe City qu'on exporte
export class City {
  id: number;
  name: string;
  slug: string;
  parkingsIds: number[];
  country: string;
  location: GPS;

  // constructeur de la classe City avec juste comme paramètres name, country et location
  constructor(name: string, country: string, location: GPS) {
    this.id = generateRandomNumberId();
    this.name = name;
    this.slug = toSlug(name);
    this.parkingsIds = [];
    this.country = country;
    this.location = location;
  }
}
