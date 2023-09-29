import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Review } from 'src/app/interfaces/review.interface';
import { ReviewData } from 'src/app/interfaces/reviewData.interface';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  vote!: boolean;
  idGroupe!: string;
  // Appel du setter si la valeur transmise par le parent change
  @Input() set idResto(value: { id: number; name: string }) {
    console.log('Valeur reçue pour idResto:', value);
    this._idResto = value.id;
    this.nameResto = value.name;
    if (value !== undefined) {
      this.openModal();
    } else {
      // Gérez le cas où value est undefined, si nécessaire
    }
  } // Ajoutez une variable pour suivre l'état de la modale

  @Output() reviewSubmitted = new EventEmitter<ReviewData>();
  reviewText: string = '';
  isModalOpen: boolean = false;
  _idResto?: number;
  nameResto?: string;
  constructor(private avisService: AvisService) {}

  openModal() {
    this.isModalOpen = true; // Ouvrez la modale
  }
  setVote(vote: boolean): void {
    this.vote = vote;
  }

  closeModal() {
    this.isModalOpen = false; // Fermez la modale
  }

  handleGroupeChanged(id: string): void {
    this.idGroupe = id;
  }

  // submitReview() {
  //   console.log('idresto modal' + this._idResto);
  //   // Créez un objet avec l'avis et un vote factice (par exemple, true).
  //   let reviewData = {
  //     review: this.reviewText,
  //     vote: this.vote,
  //     idgroupe: +this.idGroupe,
  //   };
  //   if (this._idResto !== undefined && this.idGroupe !== undefined) {
  //     this.avisService.ajouterAvis(this._idResto, reviewData).subscribe(
  //       (res) => {
  //         // const { status, message } = res;
  //         // Gérez la réponse du serveur ici. Par exemple, fermez la modale et réinitialisez le formulaire.
  //         this.reviewText = '';
  //         this.closeModal();
  //       },
  //       (error) => {
  //         // Gérez l'erreur ici
  //         console.error("Erreur lors de l'ajout de l'avis: ", error);
  //       }
  //     );
  //   } else {
  //     console.error('idGroupe est undefined');
  //   }
  //   // Enregistrez l'avis dans le backend via un service (AvisService) ici.
  //   // this.avisService.ajouterAvis(reviewData).subscribe(() => {
  //   //   // Une fois l'avis enregistré, émettez l'événement pour le faire apparaître dans la card.
  //   //   this.reviewSubmitted.emit(reviewData);
  //   //   this.reviewText = ''; // Réinitialisez le champ de texte après la soumission.
  //   //   this.closeModal(); // Fermez la modale après la soumission.
  //   // });
  // }

  submitReview() {
    if (this._idResto === undefined) {
      console.error("L'ID du restaurant n'est pas défini");
      return;
    }

    let reviewData = {
      review: this.reviewText,
      vote: this.vote,
      idgroupe: +this.idGroupe,
    };

    if (this._idResto !== undefined && this.idGroupe !== undefined) {
      this.avisService.ajouterAvis(this._idResto, reviewData).subscribe(
        (res: any) => {
          const { status, message } = res;
          this.reviewText = '';
          this.closeModal();

          if (status === 'success') {
            alert(`Succès: ${message}`);
          } else if (status === 'error') {
            alert(`Erreur: ${message}`);
          }
        },
        (error) => {
          console.error("Erreur lors de l'ajout de l'avis: ", error);
        }
      );
    } else {
      console.error('idGroupe ou idResto est undefined');
    }
  }
}
