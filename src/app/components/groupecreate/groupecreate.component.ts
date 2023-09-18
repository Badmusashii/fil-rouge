import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-groupecreate',
  templateUrl: './groupecreate.component.html',
  styleUrls: ['./groupecreate.component.css'],
})
export class GroupecreateComponent {
  constructor(private http: HttpClient) {}
  createGroupe(groupeName: string): void {
    const payload = { name: groupeName }; // Remplacez par le format attendu par votre API

    this.http.post('http://localhost:8080/api/groupe', payload).subscribe({
      next: (response) => {
        console.log('Groupe créé avec succès.', response);
      },
      error: (error) => {
        console.log('Erreur lors de la création du groupe.', error);
      },
      complete: () => {
        console.log('Requête de création du groupe complétée.');
      },
    });
  }
}
