export interface Restaurant {
  name: string;
  adresse: string;
  price: string;
  categorie: number;
  reviews?: { review: string }[];
}
