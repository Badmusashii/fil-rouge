import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-memberdelete',
  templateUrl: './memberdelete.component.html',
  styleUrls: ['./memberdelete.component.css'],
})
export class MemberdeleteComponent {
  constructor(private http: HttpClient, private router: Router) {}
  deleteAccount(): void {
    this.http.delete('http://localhost:8080/api/member').subscribe({
      next: (response) => {
        console.log('Compte supprimé avec succès.', response);
        localStorage.removeItem('token');
        this.router.navigate(['/register']);
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
