import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getAllGroupForMember(){
    interface Groupe {
      id: number;
      name: string;
    }
    return this.http.get<[Groupe]>(`http://localhost:8080/api/groupe`);
  }
  
}
