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

  getReview(id: number) {
    interface ReviewResponse {
      status: string;
      message: string;
      data: Review[];
    }

    return this.http.get<ReviewResponse>(
      `http://localhost:8080/api/review/restaurant/${id}`
    );
  }

  ajouterAvis(reviewdata: { review: string; vote: boolean; idResto: string }) {
    return this.http.post(
      'http://localhost:8080/api/review/' + reviewdata.idResto,
      reviewdata
    );
  }

  voteUp(idRestaurant: number): Observable<any> {
    const payload = {
      idRestaurant: idRestaurant,
      thumbs_up: true,
      thumbs_down: false,
    };
    return this.http.post('http://localhost:8080/api/review-votes', payload);
  }

  voteDown(idRestaurant: number): Observable<any> {
    const payload = {
      idRestaurant: idRestaurant,
      thumbs_up: false,
      thumbs_down: true,
    };
    return this.http.post('http://localhost:8080/api/review-votes', payload);
  }
  getThumbsUpDown(
    restaurantId: number
  ): Observable<{ thumbsUp: number; thumbsDown: number }> {
    return this.http.get<{ thumbsUp: number; thumbsDown: number }>(
      `http://localhost:8080/api/restaurants/${restaurantId}/votes`
    );
  }
}
