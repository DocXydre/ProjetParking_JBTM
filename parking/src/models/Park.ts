// classe Park avec comme attributs id, spot_id, startedAt, endedAt, price et paid

// importation de la fonction uuidv4
import { v4 as uuidv4 } from 'uuid';

// création de la classe Park qu'on exporte
export class Park {
  id: string;
  spot_id: number;
  startedAt: Date;
  endedAt: Date;
  price: number;
  paid: boolean;

  // constructeur de la classe Park avec comme paramètres spot_id, startedAt, endedAt et price
  constructor(spot_id: number, startedAt: Date, endedAt: Date, price: number) {
    this.id = uuidv4(); 
    this.spot_id = spot_id;
    this.startedAt = startedAt;
    this.endedAt = endedAt;
    this.price = price;
    this.paid = false;
  }
}