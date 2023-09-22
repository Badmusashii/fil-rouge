import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Review } from '../interfaces/review.interface';

@Injectable({
  providedIn: 'root',
})
export class AvisService {
  private avisSubject = new BehaviorSubject<string[]>([]);
  

 constructor(private http: HttpClient) {}

  getAvis(): Observable<string[]> {
    return this.avisSubject.asObservable();
  }

  
getReview(id:number) {
 interface ReviewResponse {
      status: string;
      message: string;
      data: Review[];
    }

    return this.http.get<ReviewResponse>(`http://localhost:8080/api/review/restaurant/${id}`);
  }




  ajouterAvis(data: {
    review: string;
    vote: boolean;
    }) {
    return this.http.post(`http://localhost:8080/api/review/id`, data);
  }
  
 
}
