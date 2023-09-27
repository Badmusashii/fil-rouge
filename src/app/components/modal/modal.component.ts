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
  // Appel du setter si la valeur transmise par le parent change
  @Input() set idResto(value: { id: number; name: string }) {
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

  closeModal() {
    this.isModalOpen = false; // Fermez la modale
  }

  submitReview() {
    // Créez un objet avec l'avis et un vote factice (par exemple, true).
    let reviewData: ReviewData = {
      review: this.reviewText,
      vote: true, // Vous devrez déterminer comment gérer le vote ici.
      idResto: String(this._idResto),
    };
    // Enregistrez l'avis dans le backend via un service (AvisService) ici.
    // this.avisService.ajouterAvis(reviewData).subscribe(() => {
    //   // Une fois l'avis enregistré, émettez l'événement pour le faire apparaître dans la card.
    //   this.reviewSubmitted.emit(reviewData);
    //   this.reviewText = ''; // Réinitialisez le champ de texte après la soumission.
    //   this.closeModal(); // Fermez la modale après la soumission.
    // });
  }
}
