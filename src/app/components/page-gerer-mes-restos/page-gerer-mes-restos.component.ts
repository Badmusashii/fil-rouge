import { Component, Input, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurants } from 'src/app/models/restaurant';
import { AvisService } from 'src/app/services/avis.service';
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
  restaurantList: any[] | undefined;
  reviews: any[] = [];
  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private avisService: AvisService
  ) {}

  // Initialisez un compteur de pouces en l'air
  numberOfThumbsUp: number = 0;
  numberOfThumbsDown: number = 0;
  // modalComponent: any;

  ngOnInit(): void {
   
  }

  updateForm: FormGroup = this.fb.group({
    name:['', Validators.required],
    adresse:['', Validators.required],
    price: ['', [Validators.required]],
    categorie: ['', [Validators.required]],
  })


  
//   update(){
//      if (this.updateForm.valid) {
//       // Le formulaire est valide, vous pouvez accéder aux valeurs ainsi :
//       const name = this.updateForm.get('name').value;
//       const adresse = this.updateForm.get('adresse').value;
//       const price = this.updateForm.get('price').value;
//       const categorie = this.updateForm.get('categorie').value;
//   }
// }

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
  handleGroupeChange(newGroupe: number): void {
    console.log('la Groupe est de  => ' + newGroupe);
    this.selectedGroupe = newGroupe;
  }
  handleReviewChange(event: any) {
    this.review = event.target.value;
  }

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
     console.log(this.restaurant);
    this.restaurantService.remove(id).subscribe((response) => {
     
      console.log('le resto a bien été supprimé.' + response);
    });
  }


  handleRestaurant(restaurant: any) {
    this.restaurant=restaurant
    console.log('la maison' + this.restaurant);
    this.avisService.getReview(this.restaurant).subscribe((data) => {
      this.reviews = data.data;
      console.log(data.data);
    });

    this.restaurantService.getOneRestaurant(restaurant).subscribe((data) =>{
      restaurant = data.data;
    });

  }
}
