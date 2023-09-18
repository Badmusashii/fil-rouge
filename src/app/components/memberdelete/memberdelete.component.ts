import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-memberdelete',
  templateUrl: './memberdelete.component.html',
  styleUrls: ['./memberdelete.component.css'],
})
export class MemberdeleteComponent {
  constructor(private http: HttpClient) {}
  deleteAccount(): void {
    this.http.delete('http://localhost:8080/api/auth/deleteAccount').subscribe({
      next: (response) => {
        console.log('Compte supprimé avec succès.', response);
      },
      error: (error) => {
        console.log('Erreur lors de la suppression du compte.', error);
      },
      complete: () => {
        console.log('Requête de suppression du compte complétée.');
      },
    });
  }
}
