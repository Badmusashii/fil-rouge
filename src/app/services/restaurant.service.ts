import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurants } from '../models/restaurant';
import { Restaurant } from '../interfaces/restaurant.interface';
import { createRestaurantResponse } from '../interfaces/createRestaurantResponse.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  create(restaurant: Restaurants): Observable<createRestaurantResponse> {
    console.log('okokokokok');
    return this.http.post<createRestaurantResponse>(
      `http://localhost:8080/api/restaurant`,
      restaurant
    );
  }
  // getByMember() {
  //   return this.http.get(
  //     'http://localhost:8080/api/restaurant/search/byMember'
  //   );
  // }
  // async getByMember() {
  //   return this.http
  //     .get('http://localhost:8080/api/restaurant/search/byMember')
  //     .toPromise()
  //     .then((response: any) => {
  //       return response.map((restaurant: any) => ({
  //         id: restaurant.id,
  //         name: restaurant.name,
  //         adresse: restaurant.adresse,
  //         price: restaurant.price,
  //       }));
  //     });
  // }
  getByMember() {
    return this.http
      .get('http://localhost:8080/api/restaurant/search/byMember')
      .pipe(
        map((response: any) => {
          return response.map((restaurant: any) => ({
            id: restaurant.id,
            name: restaurant.name,
            adresse: restaurant.adresse,
            price: restaurant.price,
            // ajoutez ici d'autres propriétés si nécessaire
          }));
        })
      );
  }

  remove(id: number) {
    const toke = localStorage.getItem('token');
    return this.http.delete(`http://localhost:8080/api/restaurant/${id}`);
  }

  update(restaurantId: number, nouveauRestaurant: Restaurants) {
    return this.http.patch(
      `http://localhost:8080/api/restaurant/${restaurantId}`,
      nouveauRestaurant
    );
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
    return this.http.get<{ data: Restaurant }>(
      `http://localhost:8080/api/restaurant/${id}`
    );
  }

  findRestaurantsByMemberGroups(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/review/byMemberGroups`);
  }
}
