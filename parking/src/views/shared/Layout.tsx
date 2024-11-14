// importation de html 
import { html } from 'hono/html';

// création du type Props avec comme attributs children et pageTitle
type Props = {
  children: any;
  pageTitle: string;
};

// création de la fonction Layout avec comme paramètre children et pageTitle
// qui retourne une vue HTML avec le layout de la page
export const Layout = ({ children, pageTitle }: Props) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" />
      <title>${pageTitle}</title>
    </head>
    <body>
      ${children}
    </body>
  </html>
`;

