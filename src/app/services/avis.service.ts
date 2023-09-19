import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AvisService {
  private avisSubject = new BehaviorSubject<string[]>([]);
  http: any;

  getAvis(): Observable<string[]> {
    return this.avisSubject.asObservable();
  }

  ajouterAvis(nouvelAvis: string) {
    const avisActuels = this.avisSubject.getValue();
    avisActuels.push(nouvelAvis);
    this.avisSubject.next(avisActuels);
  }

  review(data: {
    review: string;
    vote: boolean;
    
  }) {
    return this.http.post(`http://localhost:8080/api/review/id`, data);
  }
  
  constructor() {}
}
