import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/restaurant.interface';
import { Review } from 'src/app/interfaces/review.interface';
import { ReviewData } from 'src/app/interfaces/reviewData.interface';
import { AvisService } from 'src/app/services/avis.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-page-mes-restos',
  templateUrl: './page-mes-restos.component.html',
  styleUrls: ['./page-mes-restos.component.css'],
})
export class PageMesRestosComponent implements OnInit {
  avis: Review[] | undefined;
  listeDesAvis: Review[] = [];
  restaurantList?: Restaurant[];
  restaurantListToDisplay?: Restaurant[];
  idResto!: { id: number; name: string };
  isModalOpen: boolean = false;
  restaurantListByGroup?: { [groupId: string]: Restaurant[] };

  // Filtres
  selectedRestaurant?: string;
  selectedCategory?: string;
  selectedGroup?: string;

  constructor(
    private avisService: AvisService,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    this.avisService.getAllAvis().subscribe((nouveauxAvis) => {
      // Inversez l'ordre des avis pour que le dernier avis soit en haut
      console.log('get all avis' + nouveauxAvis);
      console.log(nouveauxAvis);
      this.avis = nouveauxAvis;
    });
    this.restaurantService.findRestaurantsByMemberGroups().subscribe((data) => {
      let flatRestaurantList: Restaurant[] = [];
      for (const groupId in data) {
        if (data.hasOwnProperty(groupId)) {
          flatRestaurantList = flatRestaurantList.concat(data[groupId]);
          this.restaurantListToDisplay = flatRestaurantList;
        }
      }
      this.handleRestaurantList(flatRestaurantList);
      this.restaurantList = flatRestaurantList;
    });
    this.restaurantService.findRestaurantsByMemberGroups().subscribe((data) => {
      this.restaurantListByGroup = {};

      for (const groupId in data) {
        if (data.hasOwnProperty(groupId)) {
          this.restaurantListByGroup[groupId] = data[groupId];
        }
      }
      console.log(
        'resto par groupe ' + JSON.stringify(this.restaurantListByGroup)
      );
    });
  }

  handleSelectedRestaurant(selectedRestaurant: string) {
    this.selectedRestaurant = selectedRestaurant;
    if (this.selectedRestaurant === 'Tous les restaurants') {
      this.restaurantListToDisplay = [...this.restaurantListToDisplay!];
    } else {
      this.filterRestaurantList();
    }
    // this.filterRestaurantList();
  }
  handleSelectedCategory(selectedCategory: string) {
    this.selectedCategory = selectedCategory;
    this.filterRestaurantList();
  }
  handleSelectedGroup(selectedGroup: string) {
    console.log('log dans le handle groupe ' + selectedGroup);
    console.log('log dans le handle groupe et typeof ' + typeof selectedGroup);
    this.selectedGroup = selectedGroup;
    this.filterRestaurantList();
  }

  filterRestaurantList() {
    this.restaurantListToDisplay = this.restaurantList;
<<<<<<<<< Temporary merge branch 1
    if(this.selectedRestaurant&&Number(this.selectedRestaurant)){
      this.restaurantListToDisplay = this.restaurantListToDisplay?.filter(
        (restaurant) => restaurant.id == Number(this.selectedRestaurant)
      );
    }
    if(this.selectedCategory&&Number(this.selectedCategory)){
      this.restaurantListToDisplay = this.restaurantListToDisplay?.filter(
        (restaurant) => restaurant.categorie.id == Number(this.selectedCategory)
      );
    }
    if(this.selectedGroup&&Number(this.selectedGroup)){
      // this.restaurantListToDisplay = this.restaurantListToDisplay?.filter(
=========
    if (this.selectedRestaurant && Number(this.selectedRestaurant)) {
      this.restaurantListToDisplay = this.restaurantList?.filter(
        (restaurant) => restaurant.id == Number(this.selectedRestaurant)
      );
    }
    if (this.selectedCategory && Number(this.selectedCategory)) {
      this.restaurantListToDisplay = this.restaurantList?.filter(
        (restaurant) => restaurant.categorie.id == Number(this.selectedCategory)
      );
    }
    if (this.selectedGroup && Number(this.selectedGroup)) {
      // this.restaurantListToDisplay = this.restaurantList?.filter(
>>>>>>>>> Temporary merge branch 2
      //   (restaurant) => restaurant.id == Number(this.selectedGroup)
      // );
    }
  }

  handleRestaurantList(restaurantList: Restaurant[]) {
    this.restaurantList = restaurantList;
    // this.restaurantListToDisplay = [...restaurantList];
  }

  handleReviewSubmitted(review: ReviewData) {
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
        restaurant.reviews.push({ review: review.review, vote: review.vote });

        // Appelez le service pour enregistrer l'avis dans le backend
        // this.avisService
        //   .ajouterAvis({ review: '', vote: true, idResto: String(restaurant.id) })
        //   .subscribe(() => {
        //     console.log('Avis enregistré dans le backend avec succès.');
        //   });
      }
    }
  }

  // handleClickOpenModal(idResto: number, nameResto: string) {
  //   this.idResto = { id: idResto, name: nameResto }; //cette propriété = this.
  // }
  handleClickOpenModal(restaurant: Restaurant) {
    this.idResto = { id: restaurant.id, name: restaurant.name };
  }
}
// Appelez le service pour enregistrer l'avis dans le backend
// this.avisService
//   .ajouterAvis(idResto, {
//     review: review,
//     vote: true,
//   })
//   .subscribe(() => {
//     console.log('Avis enregistré dans le backend avec succès.');
//   });

// handleClickOpenModal(idResto: number, nameResto: string) {
//   this.idResto = { id: idResto, name: nameResto }; //cette propriété = this.
// }
