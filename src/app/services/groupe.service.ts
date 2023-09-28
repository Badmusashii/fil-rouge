import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groupes } from '../models/groupes';
import { Member } from '../interfaces/member.interface';

@Injectable({
  providedIn: 'root',
})
export class GroupeService {
  private readonly apiUrl = 'http://localhost:8080/api/groupe';
  constructor(private http: HttpClient) {}
  ajouterMembreAuGroupe(groupeId: number) {
    const url = `${this.apiUrl}/${groupeId}`;

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
  getAllGroupeForUser(): Observable<Groupes[]> {
    return this.http.get<Groupes[]>('http://localhost:8080/api/groupe');
  }
  getAllMemberForGroupe(id: number): Observable<Member[]> {
    return this.http.get<Member[]>(`http://localhost:8080/api/groupe/${id}`);
  }
  deleteMemberInGroupe(id: number) {
    return this.http.delete(`http://localhost:8080/api/groupe/${id}`);
  }

  updateGroupName(groupeId: number, newName: string): Observable<any> {
    console.log(groupeId, newName);
    const payload = {
      newName: newName,
    };
    const url = `http://localhost:8080/api/groupe/${groupeId}/update-name`;
    return this.http.put(url, payload);
  }
}
