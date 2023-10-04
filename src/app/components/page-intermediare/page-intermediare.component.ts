import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-intermediare',
  templateUrl: './page-intermediare.component.html',
  styleUrls: ['./page-intermediare.component.css'],
})
export class PageIntermediareComponent implements OnInit {
  groupeId: number | null = null;
  token: string | null = null;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.groupeId = +params['groupeId'];
      this.token = params['token'];
    });
  }

  joinGroupe() {
    // console.log('groupeId => ' + this.groupeId);
    // console.log('token => ' + this.token);
    const url = `http://localhost:8080/api/groupe/verifier/${this.groupeId}?token=${this.token}`;
    this.http.put(url, {}).subscribe(
      (response) => {
        console.log('Réponse du serveur: ', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log('Erreur: ', error);
        alert("Une chose s'est mal passe ! desolé");
        this.router.navigate(['/register']);
      }
    );
  }
}
