import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/restaurant.interface';
import { Review } from 'src/app/review.interface';
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

  constructor(private avisService: AvisService) {}

  ngOnInit() {
    this.avisService.getAllAvis().subscribe((nouveauxAvis) => {
      console.log("get all avis" + nouveauxAvis);
      console.log(nouveauxAvis);
      
      
      this.avis = nouveauxAvis;

    });
  }

  handleRestaurantList(restaurantList: any[]) {
    this.restaurantList = restaurantList;
  }
}
