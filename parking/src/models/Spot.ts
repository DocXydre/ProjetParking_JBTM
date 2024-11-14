// classe Spot avec comme attributs id, parkingId

// importation de la fonction generateRandomNumberId
import { generateRandomNumberId } from '../utils/generateRandomNumberId';

// création de la classe Spot qu'on exporte
export class Spot {
  id: number;
  parkingId: number;

  // constructeur de la classe Spot avec juste comme paramètre parkingId
  constructor(parkingId: number) {
    this.id = generateRandomNumberId();
    this.parkingId = parkingId;
  }
}