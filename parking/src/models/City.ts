// Classe City avec comme attributs id, name, slug, parkingsIds, country et location

import { generateRandomNumberId } from '../utils/generateRandomNumberId';
import { toSlug } from '../utils/toSlug';
import { GPS } from '../types/GPS';

export class City {
  id: number;
  name: string;
  slug: string;
  parkingsIds: number[];
  country: string;
  location: GPS;

  constructor(name: string, country: string, location: GPS) {
    this.id = generateRandomNumberId();
    this.name = name;
    this.slug = toSlug(name);
    this.parkingsIds = [];
    this.country = country;
    this.location = location;
  }
}
