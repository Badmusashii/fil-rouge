import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Review } from '../review.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AvisService {
  private avisSubject = new BehaviorSubject<Review[]>([]);
 
  constructor(private http: HttpClient) {}

  getAllAvis(): Observable<Review[]> {
    return this.http.get<Review[]>(`http://localhost:8080/api/review`);
  }

  ajouterAvis(data: { review: string; vote: boolean }) {
    return this.http.post(`http://localhost:8080/api/review/id`, data);
  }

  
}
