import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Restaurant } from 'src/app/interfaces/restaurant.interface';
import { Review } from 'src/app/interfaces/review.interface';
import { ReviewData } from 'src/app/interfaces/reviewData.interface';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-card-resto',
  templateUrl: './card-resto.component.html',
  styleUrls: ['./card-resto.component.css'],
})
export class CardRestoComponent implements OnInit {
  pseudo: string | undefined = '';
  @Input() restaurant!: Restaurant;
  @Output() clickOpenModal = new EventEmitter<number>();
  // Initialisez un compteur de pouces en l'air
  numberOfThumbsUp: number = 0;
  numberOfThumbsDown: number = 0;
  avisSubject: any;
  avis!: ReviewData[];
  hasClicked: boolean = false;
  lastVote: 'up' | 'down' | null = null;
  selectGroupeId: string | null = null;
  // modalComponent: any;
  constructor(
    private modalComponent: ModalComponent,
    private avisService: AvisService
  ) {}

  ngOnInit(): void {
    // console.log('avis de l enfant' + this.restaurant.reviews);
    // console.log("a l'initialisation " + this.restaurant.id);
    this.avisService.getThumbsUpDown(this.restaurant.id).subscribe(
      (data) => {
        this.numberOfThumbsUp = data.thumbsUp;
        this.numberOfThumbsDown = data.thumbsDown;
        console.log(this.numberOfThumbsUp, this.numberOfThumbsDown);
      },
      (error) => {
        console.log('Erreur lors de la récupération des votes', error);
      }
    );
    this.avisService.getReview(this.restaurant.id).subscribe(
      (data) => {
        this.avis = data.data.map(
          (review) => review.review
        ) as unknown as ReviewData[];
        console.log('Avis récupérés:', this.avis);
      },
      (error) => {
        console.log('Erreur lors de la récupération des avis', error);
      }
    );
  }
  openModal() {
    this.modalComponent.openModal();
    console.log('Modal opened');
  }

  handleReviewSubmitted(review: ReviewData) {
    // Traitez l'avis soumis ici, par exemple, envoyez-le à un service.
    this.ajouterAvis(review);
  }

  ajouterAvis(nouvelAvis: ReviewData) {
    this.avis.push(nouvelAvis);
    // Ajoutez le nouvel avis au début de la liste
    this.avis.unshift(nouvelAvis);
  }

  voteUp() {
    // this.avisService
    //   .upDateVote(this.restaurant.id, this.group.id, true)
    //   .subscribe(
    //     (res) => {
    //       this.lastVote = 'down';
    //       if (this.lastVote === 'down' && this.numberOfThumbsDown !== 0) {
    //         this.numberOfThumbsDown--;
    //       }
    //       this.numberOfThumbsUp++;
    //       this.lastVote = 'up';
    //       console.log('Vote Up réussi', res);
    //     },
    //     (err) => {
    //       if (err.status === 400) {
    //         // Gérer l'erreur comme vous le souhaitez, par exemple :
    //         console.log(
    //           'Vous avez déjà voté de cette manière pour ce restaurant'
    //         );
    //       }
    //       console.log('Erreur lors du Vote Up', err);
    //     }
    //   );
  }

  voteDown() {
    this.avisService.voteDown(+this.restaurant.id).subscribe(
      (res) => {
        this.lastVote = 'up';
        if (this.lastVote === 'up' && this.numberOfThumbsUp !== 0) {
          this.numberOfThumbsUp--;
        }
        this.numberOfThumbsDown++;
        // this.numberOfThumbsUp--;
        this.lastVote = 'down';
        console.log('Vote Down réussi', res);
      },
      (err) => {
        if (err.status === 400) {
          // Gérer l'erreur comme vous le souhaitez, par exemple :
          console.log(
            'Vous avez déjà voté de cette manière pour ce restaurant'
          );
        }
        console.log('Erreur lors du Vote Down', err);
      }
    );
  }
}
