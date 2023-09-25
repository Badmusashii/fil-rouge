import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card-resto',
  templateUrl: './card-resto.component.html',
  styleUrls: ['./card-resto.component.css'],
})
export class CardRestoComponent implements OnInit {
  pseudo: string | undefined = '';
  @Input() restaurant!: any;
  @Output() clickOpenModal = new EventEmitter<number>();
  // Initialisez un compteur de pouces en l'air
  numberOfThumbsUp: number = 0;
  numberOfThumbsDown: number = 0;
  avisSubject: any;
  avis: any;
  hasClicked: boolean = false;
  lastVote: 'up' | 'down' | null = null;
  // modalComponent: any;
  constructor(private modalComponent: ModalComponent) {}

  ngOnInit(): void {
    console.log('avis de l enfant' + this.restaurant.reviews);
  }
  openModal() {
    this.modalComponent.openModal();
    console.log('Modal opened');
  }

  handleReviewSubmitted(review: string) {
    // Traitez l'avis soumis ici, par exemple, envoyez-le à un service.
    this.ajouterAvis(review);
  }

  ajouterAvis(nouvelAvis: string) {
    // alert('coucou');
    // this.avis = [...this.avis,nouvelAvis];
    this.avis.push(nouvelAvis);
    // Ajoutez le nouvel avis au début de la liste
    this.avis.unshift(nouvelAvis);
  }
  voteUp() {
    if (this.lastVote === 'up') {
      // Si le dernier vote était déjà un "pouce en haut", réduis le compteur
      this.numberOfThumbsUp--;
      this.lastVote = null; // Réinitialise le dernier vote
    } else {
      if (this.lastVote === 'down') {
        // Si le dernier vote était un "pouce en bas", réduis ce compteur
        this.numberOfThumbsDown--;
      }
      // Augmente le compteur du "pouce en haut"
      this.numberOfThumbsUp++;
      this.lastVote = 'up'; // Met à jour le dernier vote
    }
  }
  voteDown() {
    if (this.lastVote === 'down') {
      // Si le dernier vote était déjà un "pouce en bas", réduis le compteur
      this.numberOfThumbsDown--;
      this.lastVote = null; // Réinitialise le dernier vote
    } else {
      if (this.lastVote === 'up') {
        // Si le dernier vote était un "pouce en haut", réduis ce compteur
        this.numberOfThumbsUp--;
      }
      // Augmente le compteur du "pouce en bas"
      this.numberOfThumbsDown++;
      this.lastVote = 'down'; // Met à jour le dernier vote
    }
  }
}
