import { Component, Input, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { GroupeService } from 'src/app/services/groupe.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-groupecard',
  templateUrl: './groupecard.component.html',
  styleUrls: ['./groupecard.component.css'],
})
export class GroupecardComponent {
  @Input() groupe: any;
  member: any[] = [];
  user: any = '';
  constructor(private groupeService: GroupeService, private http: HttpClient) {}
  nom: string = '';
  email: string = '';

  ngOnInit() {
    // Assurez-vous que l'ID du groupe est disponible
    if (this.groupe && this.groupe.id) {
      this.getAllMemberForGroupe(this.groupe.id);
    }
  }
  modifier() {
    console.log('Modifier cliqué. Nom:', this.nom);
    console.log('Email:', this.email);
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
      .get(`http://localhost:8080/api/member/email?email=${this.email}`)
      .subscribe((res: any) => {
        console.log('la reponse que je cherche ' + res);
        if (res) {
          const token = res.token;
          console.log(
            'le res en retour => ' + JSON.stringify(res.futurMember.id)
          );
          this.user = this.http
            .get('http://localhost:8080/api/member/user')
            .subscribe((res) => {
              // console.log(res);
              return res;
            });
          console.log(this.user);
          console.log(
            `http://localhost:8080/api/groupe/${this.groupe.id}?token=${token}`
          );
          let templateParams = {
            to_name: res.futurMember.username,
            from_name: this.user.username,
            to_email: this.email,
            // groupe_url: `http://localhost:8080/api/groupe/verifier/${this.groupe.id}?token=${token}`,
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
        }
      });
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
          location.reload();
        },
        (err) => {
          console.error('Erreur lors du retrait du membre du groupe :', err);
        }
      );
    }
  }
}
