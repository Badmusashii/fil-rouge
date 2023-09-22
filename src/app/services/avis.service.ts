import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Review } from '../interfaces/review.interface';

@Injectable({
  providedIn: 'root',
})
export class AvisService {
  private avisSubject = new BehaviorSubject<Review[]>([]);

  constructor(private http: HttpClient) {}

  getAllAvis(): Observable<Review[]> {
    return this.http.get<Review[]>(`http://localhost:8080/api/review`);
  }

  
getReview(): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:8080/api/review/restaurant/:id`);
  }




  ajouterAvis(reviewdata: {
    review: string;
    vote: boolean; idResto: string;
    }) {
    return this.http.post(
      'http://localhost:8080/api/review/' + reviewdata.idResto,
      reviewdata
    );
  }
}
