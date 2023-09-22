import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AvisService {
  private avisSubject = new BehaviorSubject<string[]>([]);
  

 constructor(private http: HttpClient) {}

  getAvis(): Observable<string[]> {
    return this.avisSubject.asObservable();
  }

  
getReview(): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:8080/api/review/restaurant/:id`);
  }




  ajouterAvis(data: {
    review: string;
    vote: boolean;
    }) {
    return this.http.post(`http://localhost:8080/api/review/id`, data);
  }
  
 
}
