import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseApi } from '../models/response-api';
import { Categories } from '../models/categories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  constructor(private http: HttpClient) {}

  getCategorieList(): Observable<Categories[]> {
    // interface Categorie {
    //   id: number;
    //   name: string;
    // }
    return this.http.get<Categories[]>(`http://localhost:8080/api/categorie`);
  }
}
