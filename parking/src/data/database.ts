import { Database } from 'bun:sqlite';

// Connexion à la base de données SQLite (le fichier sera créé s’il n'existe pas)
export const db = new Database('src/data/parking.sqlite');

// Création des tables

// Table cities
db.run(`
  CREATE TABLE IF NOT EXISTS "cities" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL UNIQUE,
    "slug" TEXT NOT NULL UNIQUE,
    "location" TEXT,
    "country" TEXT NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT)
  );
`);

// Table parkings
db.run(`
  CREATE TABLE IF NOT EXISTS "parkings" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL UNIQUE,
    "location" TEXT,
    "numberOfPlaces" INTEGER NOT NULL,
    "opened" INTEGER NOT NULL DEFAULT 1,
    "hourlyRate" REAL NOT NULL,
    "city_id" INTEGER NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT),
    FOREIGN KEY("city_id") REFERENCES "cities"("id")
  );
`);

// Table parks
db.run(`
  CREATE TABLE IF NOT EXISTS "parks" (
    "id" TEXT NOT NULL UNIQUE,
    "startedAt" TEXT NOT NULL,
    "endedAt" TEXT,
    "vehicleNumberPlate" TEXT,
    "spot_id" INTEGER NOT NULL,
    "price" REAL NOT NULL DEFAULT 0,
    PRIMARY KEY("id"),
    FOREIGN KEY("spot_id") REFERENCES "spots"("id")
  );
`);

// Table spots
db.run(`
  CREATE TABLE IF NOT EXISTS "spots" (
    "id" INTEGER NOT NULL,
    "parking_id" INTEGER NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT),
    FOREIGN KEY("parking_id") REFERENCES "parkings"("id")
  );
`);

// Insertion des données dans les tables

// Insertion dans `cities`
db.run(`
	INSERT INTO cities (name, slug, location, country) VALUES
	('Aix-en-Provence', 'aix-en-provence', '43.533329,5.43333', 'France'),
	('La Spezia', 'la-spezia', '44.10245,9.82408', 'Italy'),
	('Aix-la-Chapelle', 'aix-la-chapelle', '50.775346,6.083887', 'Germany'),
	('San Cristóbal de La Laguna', 'san-cristobal-de-la-laguna', '28.48741,-16.31591', 'Spain'),
	('Newcastle upon Tyne', 'newcastle-upon-tyne', '54.978252,-1.617439', 'United Kingdom');
  `);
  
  // Insertion dans `parkings`
  db.run(`
	INSERT INTO parkings (name, location, numberOfPlaces, opened, hourlyRate, city_id) VALUES
	('Parking A', '43.533329,5.43333', 100, 1, 4.5, 1),
	('Parking B', '44.10245,9.82408', 50, 1, 3.0, 2),
	('Parking C', '44.10245,9.82408', 80, 1, 2.5, 2),
	('Parking D', '50.775346,6.083887', 40, 1, 2.8, 3),
	('Parking E', '28.48741,-16.31591', 70, 1, 3.1, 4),
	('Parking F', '54.978252,-1.617439', 60, 1, 2.4, 5);
  `);

console.log("Database and tables created successfully!");
