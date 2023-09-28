import { Component, Input, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { GroupeService } from 'src/app/services/groupe.service';
import { HttpClient } from '@angular/common/http';
import { Member } from 'src/app/models/member';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-groupecard',
  templateUrl: './groupecard.component.html',
  styleUrls: ['./groupecard.component.css'],
})
export class GroupecardComponent implements OnInit {
  @Input() groupe: any;
  member: any[] = [];
  user!: Partial<Member>;
  nom: string = '';
  email: string = '';
  message: string = "";

  constructor(private groupeService: GroupeService, private http: HttpClient) {}

  ngOnInit(): void {
    if (this.groupe && this.groupe.id) {
      this.getAllMemberForGroupe(this.groupe.id);
    }
  }

  modifier() {
    console.log('Modifier cliqué. Nom:', this.nom);
    console.log('Email:', this.email);
    this.message=("Le nom du groupe a été modifié.");
  }

  envoyer() {
    console.log('Envoyer cliqué. Nom:', this.nom);
    console.log('Email:', this.email);
  }

  envoyerInvitationAuGroupe() {
    this.groupeService.ajouterMembreAuGroupe(this.groupe.id);
  }

  envoyerInvitation() {
    this.http
      .get<Member>('http://localhost:8080/api/member/user')
      .pipe(
        switchMap((userResponse) => {
          this.user = { username: userResponse.username };
          return this.http.get(
            `http://localhost:8080/api/member/email?email=${this.email}`
          );
        })
      )
      .subscribe((res: any) => {
        console.log('la reponse que je cherche ' + res);
        if (res) {
          const token = res.token;
          let templateParams = {
            to_name: res.futurMember.username,
            from_name: this.user?.username,
            to_email: this.email,
            groupe_url: `http://localhost:4200/intermediaire?groupeId=${this.groupe.id}&token=${token}`,
          };

          emailjs
            .send(
              'service_ffhd2yb',
              'template_mvqx7k9',
              templateParams,
              'bvn_WzKfqlnrjW4Ro'
            )
            .then(
              (result: EmailJSResponseStatus) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
        } else {
          let templateParams = {
            from_name: this.user?.username,
            to_email: this.email,
            groupe_url: `http://localhost:4200/intermediaire/register?groupeId=${this.groupe.id}`,
          };

          emailjs
            .send(
              'service_ffhd2yb',
              'template_6lykisw',
              templateParams,
              'bvn_WzKfqlnrjW4Ro'
            )
            .then(
              (result: EmailJSResponseStatus) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
        }
      });
      this.message="L'invitation a été envoyée.";
  }

  getAllMemberForGroupe(id: number) {
    this.groupeService.getAllMemberForGroupe(id).subscribe(
      (res: any) => {
        this.member = res;
      },
      (err) => {
        console.error(
          'Erreur lors de la récupération des membres du groupe : ',
          err
        );
      }
    );
  }

  quitterGroupe() {
    if (this.groupe && this.groupe.id) {
      this.groupeService.deleteMemberInGroupe(this.groupe.id).subscribe(
        () => {
          this.message="Vous avez quitté le groupe";
          location.reload();
        },
        (err) => {
          console.error('Erreur lors du retrait du membre du groupe :', err);
          this.message="Erreur lors du retrait du groupe.";
        }
      );
    }
  }
}
