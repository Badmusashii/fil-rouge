import { Member } from '../models/member';

export interface createRestaurantResponse {
  name: string;
  adresse: string;
  price: string;
  categorie: number;
  member: Member;
  id: number;
}
