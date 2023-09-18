import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroupeService {
  private readonly apiUrl = 'http://localhost:8080/api/groupe';
  constructor(private http: HttpClient) {}
  ajouterMembreAuGroupe(groupeId: number) {
    const url = `${this.apiUrl}/${groupeId}`;

    // Supposons que vous ayez un token JWT stocké dans le localStorage
    const token = localStorage.getItem('access_token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };

    return this.http.put(url, {}, httpOptions).subscribe(
      (response) => {
        console.log('Membre ajouté:', response);
      },
      (error) => {
        console.log('Erreur:', error);
      }
    );
  }
  getAllGroupeForUser(): Observable<any> {
    return this.http.get('http://localhost:8080/api/groupe');
  }
  getAllMemberForGroupe(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/groupe/${id}`);
  }
}
