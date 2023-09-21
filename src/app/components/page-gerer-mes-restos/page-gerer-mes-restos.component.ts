import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvisService } from 'src/app/services/avis.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-page-gerer-mes-restos',
  templateUrl: './page-gerer-mes-restos.component.html',
  styleUrls: ['./page-gerer-mes-restos.component.css']
})
export class PageGererMesRestosComponent  {

  reviews:any[] = []
  constructor(private fb: FormBuilder, private restaurantService:RestaurantService, private avisService:AvisService){}
  pseudo: string | undefined = "'titi'";
  // Initialisez un compteur de pouces en l'air
  numberOfThumbsUp: number = 0;
  numberOfThumbsDown: number = 0;
  // modalComponent: any;
 
  

  ngOnInit():void{
    this.avisService.getReview().subscribe(data => {
      this.reviews=data;
    });
  }

  createForm: FormGroup = this.fb.group({
    name:[ '', Validators.required],
    adresse:['',[Validators.required]],
    price:['',[Validators.required]],
    categorie:['',[Validators.required]],
    groupe:['',[Validators.required]],
  })


  create(){
    const data={
      "name": this.createForm.get('name')?.value,
      "adresse":this.createForm.get('adresse')?.value,
      "price":this.createForm.get('price')?.value,
      "categorie":this.createForm.get('categorie')?.value,
      "groupe":this.createForm.get('groupe')?.value,

    };
    this.restaurantService.create(data);
  }

  remove(id:number){
  this.restaurantService.remove(id)
 }



}
