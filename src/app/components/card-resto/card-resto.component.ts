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
  // modalComponent: any;
  constructor(private modalComponent: ModalComponent) {}

  ngOnInit(): void {
    console.log("avis de l enfant" + this.restaurant.reviews);
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
}
