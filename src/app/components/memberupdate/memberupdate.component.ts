import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-memberupdate',
  templateUrl: './memberupdate.component.html',
  styleUrls: ['./memberupdate.component.css'],
})
export class MemberupdateComponent implements OnInit {
  updateForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.updateForm = this.formBuilder.group({
      pseudo: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.updateForm.valid) {
      console.log(this.updateForm.value);
      this.http
        .patch('http://localhost:8080/api/auth', this.updateForm.value)
        .subscribe({
          next: (response) => {
            console.log('Réponse du serveur:', response);
          },
          error: (error) => {
            console.log('Erreur:', error);
          },
          complete: () => {
            console.log('Requête complétée');
          },
        });
    }
  }
}
