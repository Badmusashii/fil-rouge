export interface Restaurant {
    id: number;
    name: string;
    adresse: string;
    price: string;
    categorie: {
        id: number;
        name: string;
    };
     member?: {
                username: string;
    }
    reviews?: { review: string ; vote: boolean}[];
}