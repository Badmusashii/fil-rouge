import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Review } from 'src/app/interfaces/review.interface';
import { AvisService } from 'src/app/services/avis.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-page-gerer-mes-restos',
  templateUrl: './page-gerer-mes-restos.component.html',
  styleUrls: ['./page-gerer-mes-restos.component.css'],
})
export class PageGererMesRestosComponent {
  reviews: Review[] | undefined;
  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private avisService: AvisService
  ) {}
  pseudo: string | undefined = "'titi'";
  // Initialisez un compteur de pouces en l'air
  numberOfThumbsUp: number = 0;
  numberOfThumbsDown: number = 0;
  // modalComponent: any;

  message: string = ''; // Initialisation du message vide

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
    groupe: ['', [Validators.required]],
  });

  handlePriceChange(newPrice: string): void {
    console.log('le prix est de  => ' + newPrice);
  }
  handleCategorieChange(newCategorie: string): void {
    console.log('la categorie est de  => ' + newCategorie);
  }
  handleGroupeChange(newGroupe: string): void {
    console.log('la Groupe est de  => ' + newGroupe);
  }
  create() {
    const data = {
      name: this.createForm.get('name')?.value,
      adresse: this.createForm.get('adresse')?.value,
      price: this.createForm.get('price')?.value,
      categorie: this.createForm.get('categorie')?.value,
      groupe: this.createForm.get('groupe')?.value,
    };
    this.restaurantService.create(data).subscribe(() => {
    this.message = 'Restaurant créé avec succè.';
     // Effacez le formulaire ou effectuez d'autres actions nécessaires.
      this.createForm.reset();
    },
    (error) => {
      console.error('Une erreur est survenue lors de la création du restaurant : ', error);
      this.message = 'Une erreur est survenue lors de la création du restaurant.';
    }
  );
}
  
  
  remove(id: number) {
    this.restaurantService.remove(id);
  }
}
