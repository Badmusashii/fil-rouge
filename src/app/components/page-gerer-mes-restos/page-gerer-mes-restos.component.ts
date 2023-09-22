import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvisService } from 'src/app/services/avis.service';
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
  // reviews: Array<{ review: string; groupe: number }> = [];
  reviews: Array<{ review: string; groupes: Array<{ id: number }> }> = [];

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

  ngOnInit(): void {
    this.avisService.getReview().subscribe((data) => {
      this.reviews = data;
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
  handleGroupeChange(newGroupe: number): void {
    console.log('la Groupe est de  => ' + newGroupe);
    this.selectedGroupe = newGroupe;
  }
  handleReviewChange(event: any) {
    this.review = event.target.value;
  }

  create() {
    const data = {
      name: this.createForm.get('name')?.value,
      adresse: this.createForm.get('adresse')?.value,
      price: this.createForm.get('price')?.value,
      categorie: this.createForm.get('categorie')?.value,
      groupe: this.createForm.get('groupe')?.value,
    };
    this.restaurantService.create(data);
  }

  remove(id: number) {
    this.restaurantService.remove(id);
  }

  remove(id: number) {
    this.restaurantService.remove(id);
  }
}
