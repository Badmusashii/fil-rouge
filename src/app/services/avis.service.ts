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

  
getReview(id:number) {
 interface ReviewResponse {
      status: string;
      message: string;
      data: Review[];
    }

    return this.http.get<ReviewResponse>(`http://localhost:8080/api/review/restaurant/${id}`);
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

  // A faire apres la requete: enregistrer les vote dans le back!

//    enregistrerVote(idResto: number, vote: boolean): Observable<any> {
//     const voteData = {
//       idResto: idResto,
//       vote: vote,
//     };
 //return this.http.post<any>(`${this.apiUrl}/voter`, voteData); // Remplacez "/voter" par l'URL de votre endpoint de vote
// }
}
