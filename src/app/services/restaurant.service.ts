import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant.interface';

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

    return this.http.get<RestaurantResponse>(`http://localhost:8080/api/restaurant`);
  }
}

