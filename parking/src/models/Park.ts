// Classe Park avec comme attributs id, spot_id, startedAt, endedAt, price et paid
import { v4 as uuidv4 } from 'uuid';

export class Park {
  id: string;
  spot_id: number;
  startedAt: Date;
  endedAt: Date;
  price: number;
  paid: boolean;

  constructor(spot_id: number, startedAt: Date, endedAt: Date, price: number) {
    this.id = uuidv4(); 
    this.spot_id = spot_id;
    this.startedAt = startedAt;
    this.endedAt = endedAt;
    this.price = price;
    this.paid = false;
  }
}