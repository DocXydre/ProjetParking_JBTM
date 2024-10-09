// Classe Spot avec comme attributs id, parkingId

import { generateRandomNumberId } from '../utils/generateRandomNumberId';

export class Spot {
  id: number;
  parkingId: number;

  constructor(parkingId: number) {
    this.id = generateRandomNumberId();
    this.parkingId = parkingId;
  }
}