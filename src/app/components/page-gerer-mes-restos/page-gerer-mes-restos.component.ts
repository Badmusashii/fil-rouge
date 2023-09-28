import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurants } from 'src/app/models/restaurant';
import { AvisService } from 'src/app/services/avis.service';
import { Review } from 'src/app/interfaces/review.interface';
import { Restaurant } from 'src/app/interfaces/restaurant.interface';
@Component({
  selector: 'app-page-gerer-mes-restos',
  templateUrl: './page-gerer-mes-restos.component.html',
  styleUrls: ['./page-gerer-mes-restos.component.css'],
})
export class PageGererMesRestosComponent {
  selectedGroupe!: number;
  // reviews: Array<{ review: string; groupe: number }> = [];
  reviewsFromForm: Array<{ review: string; groupes: Array<{ id: number }> }> =
    [];
  review!: string;
  restaurant: any;
  restaurantData: any;
  restaurantList: any[] | undefined;
  reviews: Review[] = [];
  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private avisService: AvisService
  ) {}

  // Initialisez un compteur de pouces en l'air
  numberOfThumbsUp: number = 0;
  numberOfThumbsDown: number = 0;
  // modalComponent: any;

  message: string = ''; // Initialisation du message vide

  ngOnInit(): void {
    this.avisService.getReview(1).subscribe((response) => {
      this.reviews = response.data;
      console.log(response.data);
    });
  }

  createForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    adresse: ['', [Validators.required]],
    price: ['', [Validators.required]],
    categorie: ['', [Validators.required]],
    reviews: this.fb.array([]),
  });

  handlePriceChange(newPrice: string): void {
    console.log('le prix est de  => ' + newPrice);
    this.createForm.get('price')?.setValue(newPrice);
  }
  handleCategorieChange(newCategorie: string): void {
    console.log('la categorie est de  => ' + newCategorie);
    this.createForm.get('categorie')?.setValue(newCategorie);
  }
  handleGroupeChange(newGroupe: string): void {
    console.log('la Groupe est de  => ' + newGroupe);
    this.selectedGroupe = Number(newGroupe);
  }
  handleReviewChange(event: any) {
    this.review = event.target.value;
  }

  // create() {
  //   console.log('okokokokokoko' + this.selectedGroupe);
  //   if (this.createForm.valid) {
  //     const restaurant: Restaurants = {
  //       name: this.createForm.get('name')?.value,
  //       adresse: this.createForm.get('adresse')?.value,
  //       price: this.createForm.get('price')?.value,
  //       categorie: +this.createForm.get('categorie')?.value,
  //     };
  //     if (this.review && this.review.trim() !== '') {
  //       this.reviewsFromForm.push({
  //         review: this.review,
  //         groupes: [{ id: +this.selectedGroupe }],
  //       });
  //       restaurant.reviews = this.reviewsFromForm;
  //     }
  //     this.restaurantService.create(restaurant).subscribe((res) => {
  //       console.log(res);
  //     });
  //   }
  // }
  // create() {
  //   console.log('okokokokokoko' + this.selectedGroupe);
  //   if (this.createForm.valid) {
  //     const restaurant: Restaurants = {
  //       name: this.createForm.get('name')?.value,
  //       adresse: this.createForm.get('adresse')?.value,
  //       price: this.createForm.get('price')?.value,
  //       categorie: +this.createForm.get('categorie')?.value,
  //     };
  //     if (this.review && this.review.trim() !== '') {
  //       const reviewPayload = {
  //         review: this.review,
  //         vote: true,
  //         idgroupe: this.selectedGroupe,
  //       };
  //     }
  //     this.avisService.ajouterAvis(this.restaurant.id, reviewPayload).subscribe(
  //       (reviewRes: any) => {
  //         console.log('Review ajoutée : ', reviewRes);
  //       },
  //       (reviewError) => {
  //         console.log('Erreur lors de l’ajout de la revue : ', reviewError);
  //       }
  //     );
  //   }
  // }

  create() {
    console.log('okokokokokoko' + this.selectedGroupe);
    if (this.createForm.valid) {
      const restaurant: Restaurants = {
        name: this.createForm.get('name')?.value,
        adresse: this.createForm.get('adresse')?.value,
        price: this.createForm.get('price')?.value,
        categorie: +this.createForm.get('categorie')?.value,
      };

      this.restaurantService.create(restaurant).subscribe(
        (res: any) => {
          console.log('Restaurant créé : ', res);
          console.log(this.selectedGroupe);

          if (this.review && this.review.trim() !== '') {
            const reviewPayload = {
              review: this.review,
              vote: true,
              idgroupe: this.selectedGroupe,
            };
            console.log('le log que je cherche ' + typeof res.id);
            console.log('Review payload:', reviewPayload);

            this.avisService.ajouterAvis(res.id, reviewPayload).subscribe(
              (reviewRes: any) => {
                console.log('Review ajoutée : ', reviewRes);
              },
              (reviewError) => {
                console.log(
                  'Erreur lors de l’ajout de la revue : ',
                  reviewError
                );
              }
            );
          }
        },
        (error) => {
          console.log('Erreur lors de la création du restaurant : ', error);
        }
      );
    }
  }

  remove(id: number) {
    this.restaurantService.remove(id);
    this.message="Le restaurant a été supprimé.";
  }

  handleRestaurant(restaurant: any) {
    this.restaurant = restaurant;
    console.log('la maison' + this.restaurant);
    this.avisService.getReview(this.restaurant).subscribe((data) => {
      this.reviews = data.data;
      console.log(data);
    });
    this.restaurantService
      .getOneRestaurant(+this.restaurant)
      .subscribe((data) => {
        this.restaurantData = data;
        console.log('La data que je veut ' + JSON.stringify(data));
      });
    console.log('La data que je veut ' + this.restaurantData);
  }
}
