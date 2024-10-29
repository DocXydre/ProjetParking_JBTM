import { Database } from 'bun:sqlite';

// Connexion à la base de données
export const db = new Database('src/data/parking.sqlite');
