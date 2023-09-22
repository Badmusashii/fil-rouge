import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Restaurant } from '../models/restaurant';
=======
import { Restaurant } from '../interfaces/restaurant.interface';
>>>>>>> 69f062b8192a05dcce8b56c9effe0447d087f77f

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  create(restaurant: Restaurant) {
    console.log('okokokokok');
    return this.http.post(`http://localhost:8080/api/restaurant`, restaurant);
  }

  remove(id:number){
    const toke = localStorage.getItem('token')
    return this.http.delete(`http://localhost:8080/api/restaurant/${id}`)
  }

  getRestaurantList() {
    interface RestaurantResponse {
      status: string;
      message: string;
      data: Restaurant[];
    }

    return this.http.get<RestaurantResponse>(`http://localhost:8080/api/restaurant`);
  }
}
