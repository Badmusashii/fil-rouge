export interface Restaurant {
    id: number;
      name: string;
      adresse: string;
      price: string;
      member: {
        id: number;
        username: string;
      };
}