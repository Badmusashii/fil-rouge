import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurant } from 'src/app/models/restaurant';
@Component({
  selector: 'app-page-gerer-mes-restos',
  templateUrl: './page-gerer-mes-restos.component.html',
  styleUrls: ['./page-gerer-mes-restos.component.css'],
})
export class PageGererMesRestosComponent {
  selectedGroupe!: number;
  reviews: Array<{ review: string; groupe: number }> = [];
  review!: string;
  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService
  ) {}
  pseudo: string | undefined = "'titi'";
  // Initialisez un compteur de pouces en l'air
  numberOfThumbsUp: number = 0;
  numberOfThumbsDown: number = 0;
  // modalComponent: any;

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
    // this.createForm.get('groupe')?.setValue(newGroupe);
  }
  handleReviewChange(event: any) {
    this.review = event.target.value;
  }

  create() {
    console.log('okokokokokoko' + this.selectedGroupe);
    if (this.createForm.valid) {
      const restaurant: Restaurant = {
        name: this.createForm.get('name')?.value,
        adresse: this.createForm.get('adresse')?.value,
        price: this.createForm.get('price')?.value,
        categorie: +this.createForm.get('categorie')?.value,
      };
      if (this.review && this.review.trim() !== '') {
        this.reviews.push({
          review: this.review,
          groupe: +this.selectedGroupe,
        });
        restaurant.reviews = this.reviews;
      }
      this.restaurantService.create(restaurant).subscribe((res) => {
        console.log(res);
      });
    }
  }

  remove(id: number) {
    this.restaurantService.remove(id);
  }
}
