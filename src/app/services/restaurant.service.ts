import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }
  create(data:{ nom: string; adresse:string;}){

    return this.http.post(`http://localhost:8080/api/restaurant`,data)
  }
  getRestaurantList(){
    interface RestaurantResponse {
      status: string;
      message: string;
      data: Restaurant[];
    }

    interface Restaurant {
      id: number;
      name: string;
      adresse: string;
      price: string;
      member: {
        id: number;
        username: string;
      };
    }
    return this.http.get<RestaurantResponse>(`http://localhost:8080/api/restaurant`);
  }
}

