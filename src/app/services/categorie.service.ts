import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) { }

  getCategorieList(){
    interface Categorie {
      id: number;
      name: string;
    }
    return this.http.get<[Categorie]>(`http://localhost:8080/api/categorie`);
  }
}
