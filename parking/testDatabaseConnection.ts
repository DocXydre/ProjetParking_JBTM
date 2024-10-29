import { db } from './src/data/database';

const testConnection = () => {
  try {
    db.run("CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY, name TEXT)");
    console.log("La connexion est fonctionnelle et la table de test est créée.");
  } catch (error) {
    console.error("Erreur de connexion à la base de données :", error);
  }
};

testConnection();