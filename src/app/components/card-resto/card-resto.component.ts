import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card-resto',
  templateUrl: './card-resto.component.html',
  styleUrls: ['./card-resto.component.css'],
})
export class CardRestoComponent {
  pseudo: string | undefined = "'titi'";

  // Initialisez un compteur de pouces en l'air
  numberOfThumbsUp: number = 0;
  numberOfThumbsDown: number = 0;
  // modalComponent: any;
  constructor(private modalComponent: ModalComponent) {}

  openModal() {
    this.modalComponent.openModal();
  }

  handleReviewSubmitted(review: string) {
    // Traitez l'avis soumis ici, par exemple, envoyez-le à un service.
  }
}
