import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-page-gerer-mes-restos',
  templateUrl: './page-gerer-mes-restos.component.html',
  styleUrls: ['./page-gerer-mes-restos.component.css']
})
export class PageGererMesRestosComponent {
  constructor(private fb: FormBuilder, private restaurantService:RestaurantService){}
  pseudo: string | undefined = "'titi'";
  // Initialisez un compteur de pouces en l'air
  numberOfThumbsUp: number = 0;
  numberOfThumbsDown: number = 0;
  // modalComponent: any;

  createForm: FormGroup = this.fb.group({
    nom:[ '', Validators.required],
    Adresse:['',[Validators.required]],
  })

  create(){
    const data={
      "nom": this.createForm.get('Nom')?.value,
      "adresse":this.createForm.get('Adresse')?.value,
    };
    this.restaurantService.create(data);
  }

}
