import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-memberupdate',
  templateUrl: './memberupdate.component.html',
  styleUrls: ['./memberupdate.component.css'],
})
export class MemberupdateComponent implements OnInit {
  updateForm: FormGroup;
  message: string = "";
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private memberService : MemberService) {
    this.updateForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    let member : Member;
    this.memberService.getMember().subscribe((res: Member) =>{
        member = res;
        this.updateForm = this.formBuilder.group({
        username: [member.username, [Validators.required, Validators.minLength(2)]],
        firstname: [member.firstname, [Validators.required, Validators.minLength(2)]],
        lastname: [member.lastname, [Validators.required, Validators.minLength(2)]],
        email: [member.email, [Validators.required, Validators.email]],
        currentPassword: ['', [Validators.required, Validators.minLength(5)]],
        newPassword: ['', [Validators.required, Validators.minLength(5)]],
      });
    });
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      console.log(this.updateForm.value);
      this.http
        .patch('http://localhost:8080/api/auth/update', this.updateForm.value)
        .subscribe({
          next: (response) => {
            console.log('Réponse du serveur:', response);
            this.message = "Les modifications sont enregistrées.";
          },
          error: (error) => {
            console.log('Erreur:', error);
            this.message = "Erreur lors de l'enregistrement des modifications.";
          },
          complete: () => {
            console.log('Requête complétée');
          },
        });
    }
  }
}
