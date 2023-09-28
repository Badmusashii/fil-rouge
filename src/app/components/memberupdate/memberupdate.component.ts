import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/interfaces/member.interface';

@Component({
  selector: 'app-memberupdate',
  templateUrl: './memberupdate.component.html',
  styleUrls: ['./memberupdate.component.css'],
})
export class MemberupdateComponent implements OnInit {
  updateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private memberService: MemberService
  ) {
    let member: Member;
    this.memberService.getMember().subscribe((res: Member) => {
      member = res;
    });

    this.updateForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.updateForm.valid) {
      console.log(this.updateForm.value);
      this.http
        .patch('http://localhost:8080/api/member', this.updateForm.value)
        .subscribe({
          next: (response) => {
            console.log('Réponse du serveur:', response);
          },
          error: (error) => {
            console.log('Erreur:', error);
            alert('Il y a eu un soucie dans la misa à jour de votre compte');
          },
          complete: () => {
            console.log('Requête complétée');
            alert('Votre compte à bien été mise à jour');
            location.reload();
          },
        });
    }
  }
}
