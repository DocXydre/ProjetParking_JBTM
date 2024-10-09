//  générer un nombre aléatoire, entier et positif, contenant 6 chiffres.
export const generateRandomNumberId = (): number => {
  return Math.floor(Math.random() * 900000) + 100000;
};