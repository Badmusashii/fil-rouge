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
    // Supposons que 4 est l'ID du groupe
    this.groupeService.ajouterMembreAuGroupe(4);
  }

  envoyerInvitation() {
    const member = this.http
      .get('http::/localhost:8080/api/member/user')
      .subscribe((res) => {
        console.log(res);
        return res;
      });

    let templateParams = {
      from_name: 'Votre Nom',
      to_email: this.email, // la variable email que nous avons liée avec ngModel
      message: 'Message d’invitation',
    };

    emailjs
      .send(
        'service_3wvcygu',
        'template_jllzhna',
        templateParams,
        '60MgmVGdSHW3usbWU'
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
}
