import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AvisService } from 'src/app/services/avis.service';
import { Restaurant } from 'src/app/interfaces/restaurant.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  // Appel du setter si la valeur transmise par le parent change
  @Input() set idResto(value: { id: number; name: string }) {
    if (value) {
      // Ajoutez cette vérification
      this._idResto = value.id;
      this.nameResto = value.name;
      this.openModal();
    } else {
      // Gérez le cas où value est undefined, si nécessaire
    }
  } // Ajoutez une variable pour suivre l'état de la modale

  @Output() reviewSubmitted = new EventEmitter<string>();
  reviewText: string = '';
  isModalOpen: boolean = false;
  _idResto: number | undefined;
  nameResto: string | undefined;
  constructor(private avisService: AvisService) {}

  openModal() {
    this.isModalOpen = true; // Ouvrez la modale
  }

  closeModal() {
    this.isModalOpen = false; // Fermez la modale
  }

  submitReview() {
    if (this._idResto === undefined) {
      console.error("L'ID du restaurant n'est pas défini");
      return;
    }

    let reviewData = {
      review: this.reviewText,
      vote: true,
    };

    this.avisService.ajouterAvis(this._idResto, reviewData).subscribe(() => {
      this.reviewSubmitted.emit(this.reviewText);
      this.reviewText = '';
      this.closeModal();
    });
  }
}
