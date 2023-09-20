import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/review.interface';
import { ModalComponent } from '../modal/modal.component';
import { Restaurant } from 'src/app/interfaces/restaurant.interface';

@Component({
  selector: 'app-card-resto',
  templateUrl: './card-resto.component.html',
  styleUrls: ['./card-resto.component.css'],
})
export class CardRestoComponent implements OnInit {
  pseudo: string | undefined = '';
   @Input() restaurant!: any;
  // Initialisez un compteur de pouces en l'air
  numberOfThumbsUp: number = 0;
  numberOfThumbsDown: number = 0;
  avisSubject: any;
  // modalComponent: any;
  constructor(private modalComponent: ModalComponent) {}

  ngOnInit(): void {
    console.log("avis de l enfant" + this.restaurant.reviews);
  }
  openModal() {
    this.modalComponent.openModal();
  }

  handleReviewSubmitted(review: string) {
    // Traitez l'avis soumis ici, par exemple, envoyez-le à un service.
    this.ajouterAvis(review);
    
  }

  ajouterAvis(nouvelAvis: string) {
    // alert('coucou');
    // this.avis = [...this.avis,nouvelAvis];
    
  }
}
