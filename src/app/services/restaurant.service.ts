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
}
