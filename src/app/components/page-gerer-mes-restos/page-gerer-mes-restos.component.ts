import { Component, Input, } from '@angular/core';
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
  restaurant!: Restaurant;
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

  updateForm: FormGroup = this.fb.group({
    name:['', Validators.required],
    adresse:['', Validators.required],
    price: ['', [Validators.required]],
    categorie: ['', [Validators.required]],
  })

  handlePriceChange(newPrice: string): void {
    console.log('le prix est de  => ' + newPrice);
    this.createForm.get('price')?.setValue(newPrice);
    this.updateForm.get('price')?.setValue(newPrice);
  }
  handleCategorieChange(newCategorie: string): void {
    console.log('la categorie est de  => ' + newCategorie);
    this.createForm.get('categorie')?.setValue(newCategorie);
     this.updateForm.get('categorie')?.setValue(newCategorie);
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
      if (this.review && this.review.trim() !== '') {
        this.reviewsFromForm.push({
          review: this.review,
          groupes: [{ id: +this.selectedGroupe }],
        });
        restaurant.reviews = this.reviewsFromForm;
      }
      this.restaurantService.create(restaurant).subscribe((res) => {
        console.log(res);
      });
    }
  }

  remove(id:number) {    
    const confirmDelete = confirm('Êtes-vous sûr de vouloir supprimer ce restaurant ?');
  if (!confirmDelete) {
    return; // L'utilisateur a annulé l'opération de suppression
  }
    
     console.log('le toi est' + id);
    //  console.log(this.restaurant);
    this.restaurantService.remove(id).subscribe((response) => {
     
      console.log('le resto a bien été supprimé.' + response);
    });
  }

  update() {
    console.log('dit moi ' + JSON.stringify(this.updateForm.value))
    if (this.updateForm.valid) {
    const updateRestaurant = this.updateForm.value;
    console.log('oulala' + updateRestaurant)
      this.restaurantService.update(this.restaurantData.id, updateRestaurant).subscribe((response: any) => {
        console.log('Restaurant mis à jour avec succès' , response);
        alert("Restaurant mis à jour avec succès");
      },
      (error: any) =>{
        console.error('erreur lors de la mise à jur du restaurant', error);
        alert("erreur lors de la mise à jur du restaurant")

      }
      );
     } else{
console.error('Le formulaire n\'est pas valide. Impossible de mettre à jour le restaurant.');
alert("Le formulaire n\'est pas valide. Impossible de mettre à jour le restaurant.")
      }
  }






  handleRestaurant(restaurantId: string) {
    
    
    this.avisService.getReview(parseInt(restaurantId)).subscribe((data) => {
      this.reviews = data.data;
      console.log("get review", data);
    });
    this.restaurantService
      .getOneRestaurant(parseInt(restaurantId))
      .subscribe((data: {data: Restaurant} ) => {
        this.restaurantData = data.data;
        console.log('La data que je veut ' + JSON.stringify(data));
        console.log('La data que je veut ', this.restaurantData);
      });
    
  }



}



