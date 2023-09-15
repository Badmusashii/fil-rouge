import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { GroupeService } from 'src/app/services/groupe.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-groupecard',
  templateUrl: './groupecard.component.html',
  styleUrls: ['./groupecard.component.css'],
})
export class GroupecardComponent {
  constructor(private groupeService: GroupeService, private http: HttpClient) {}
  nom: string = '';
  email: string = '';

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
    this.http.get('http::/localhots');

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
}
