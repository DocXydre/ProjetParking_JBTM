// Classe Park avec comme attributs id, spot_id, startedAt, endedAt, price et paid
import { generateRandomNumberId } from '../utils/generateRandomNumberId';

export class Park {
  id: number;
  spot_id: number;
  startedAt: Date;
  endedAt: Date;
  price: number;
  paid: boolean;

  constructor(spot_id: number, startedAt: Date, endedAt: Date, price: number) {
    this.id = generateRandomNumberId();
    this.spot_id = spot_id;
    this.startedAt = startedAt;
    this.endedAt = endedAt;
    this.price = price;
    this.paid = false;
  }
}