import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant.interface';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }
  create(data:{ name: string; adresse:string; price:string; categorie:string;groupe:string} ){
 const token = localStorage.getItem('token')
    
    return this.http.post(`http://localhost:8080/api/restaurant`,data )
  }

  remove(id:number){
    const toke = localStorage.getItem('token')
    return this.http.delete('http://localhost:8080/api/restaurant/${id}')
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

