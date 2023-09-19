import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card-resto',
  templateUrl: './card-resto.component.html',
  styleUrls: ['./card-resto.component.css'],
})
export class CardRestoComponent {
  pseudo: string | undefined = 'titi';
  nameResto: string | undefined = 'bon ap';
  @Input() avis: string[] = []; // Propriété pour stocker les avis

  // Initialisez un compteur de pouces en l'air
  numberOfThumbsUp: number = 0;
  numberOfThumbsDown: number = 0;
  avisSubject: any;
  // modalComponent: any;
  constructor(private modalComponent: ModalComponent) {}

  openModal() {
    this.modalComponent.openModal();
  }

  handleReviewSubmitted(review: string) {
    // Traitez l'avis soumis ici, par exemple, envoyez-le à un service.
  }

  ajouterAvis(nouvelAvis: string) {
    const avisActuels = this.avisSubject.getValue();
    avisActuels.push(nouvelAvis);
    this.avisSubject.next(avisActuels);
  }
}
