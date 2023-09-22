export interface Review {
      review: string;
      vote: boolean;
      member: {
                id: number;
                username: string;
    }
}