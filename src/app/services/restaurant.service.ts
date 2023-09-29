import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurants } from '../models/restaurant';
import { Restaurant } from '../interfaces/restaurant.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  update: any;
  constructor(private http: HttpClient) {}

  create(restaurant: Restaurants) {
    console.log('okokokokok');
    return this.http.post(`http://localhost:8080/api/restaurant`, restaurant);
  }

  remove(id: number) {
    const toke = localStorage.getItem('token');
    return this.http.delete(`http://localhost:8080/api/restaurant/${id}`);
  }

  getRestaurantList() {
    interface RestaurantResponse {
      status: string;
      message: string;
      data: Restaurant[];
    }

    return this.http.get<RestaurantResponse>(
      `http://localhost:8080/api/restaurant`
    );
  }

  getOneRestaurant(id: number) {
    return this.http.get<{data: Restaurant }>(`http://localhost:8080/api/restaurant/${id}`);
  }

  findRestaurantsByMemberGroups(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/review/byMemberGroups`);
  }
}

