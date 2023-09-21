import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/restaurant.interface';
import { Review } from 'src/app/interfaces/review.interface';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-page-mes-restos',
  templateUrl: './page-mes-restos.component.html',
  styleUrls: ['./page-mes-restos.component.css'],
})
export class PageMesRestosComponent implements OnInit {
  avis: Review[] | undefined;
  // listeDesAvis: Review[] = [];
  restaurantList: any[] | undefined;
  idResto!: { id: number };
  isModalOpen: boolean = false;

  constructor(private avisService: AvisService) {}

  ngOnInit() {
    this.avisService.getAllAvis().subscribe((nouveauxAvis) => {
      // Inversez l'ordre des avis pour que le dernier avis soit en haut
           
            console.log('get all avis' + nouveauxAvis);
      console.log(nouveauxAvis);

      this.avis = nouveauxAvis;
    });
  }

  handleRestaurantList(restaurantList: any[]) {
    this.restaurantList = restaurantList;
  }

  handleReviewSubmitted(review: string) {
    if (this.idResto && this.restaurantList) {
      // Récupérez l'ID du restaurant pour lequel l'avis est soumis
      const idResto = this.idResto.id;

      // Ajoutez l'avis soumis à la carte correspondante
      const restaurant = this.restaurantList.find((r) => r.id === idResto);

      if (restaurant) {
        if (!restaurant.reviews) {
          restaurant.reviews = [];
        }

        // Ajoutez  l'avis soumis au tableau des avis du restaurant
        restaurant.reviews.push({ review: review });

        // Appelez le service pour enregistrer l'avis dans le backend
        this.avisService
          .ajouterAvis({ review: '', vote: true, idResto: restaurant.id })
          .subscribe(() => {
            console.log('Avis enregistré dans le backend avec succès.');
          });
      }
    }
  }

  handleClickOpenModal(idResto: number) {
    this.idResto = { id: idResto }; //cette propriété = this.
  }
}
