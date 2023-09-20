import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-intermediare-register',
  templateUrl: './page-intermediare-register.component.html',
  styleUrls: ['./page-intermediare-register.component.css'],
})
export class PageIntermediareRegisterComponent implements OnInit {
  registerForm: FormGroup;
  groupeId: number | null = null;
  token: string | null = null;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      pseudo: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordConf: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.groupeId = +params['groupeId'];
      this.token = params['token'];
      console.log('lid groupe => ' + this.groupeId);
    });
  }

  register() {
    if (this.registerForm.valid) {
      const userData = {
        lastname: this.registerForm.get('nom')?.value,
        firstname: this.registerForm.get('prenom')?.value,
        username: this.registerForm.get('pseudo')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
      };
      // const userData = this.registerForm.value;
      this.http
        .post('http://localhost:8080/api/auth/register', userData)
        .subscribe((res) => {
          const userDataLog = {
            username: userData.username,
            password: userData.password,
          };
          this.login(userDataLog);
        });
    }
  }
  login(userDataLog: any) {
    this.http
      .post('http://localhost:8080/api/auth/login', userDataLog)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.token = response.accessToken;
          // console.log('token => ' + this.token);
          this.joinGroupe();
        },
        (error) => {
          console.log('Erreur lors de la connexion:', error);
        }
      );
  }

  joinGroupe() {
    const url = `http://localhost:8080/api/groupe/verifier/${this.groupeId}?token=${this.token}`;
    this.http.put(url, {}).subscribe(
      (response) => {
        console.log('Réponse du serveur: ', response);
        // Traitement en cas de succès
      },
      (error) => {
        console.log('Erreur: ', error);
        // Traitement en cas d'erreur
      }
    );
  }
}
