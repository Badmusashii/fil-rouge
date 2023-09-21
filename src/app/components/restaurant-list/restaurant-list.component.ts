import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{
  restaurantList: any;
  @Output() restaurantListOutput: EventEmitter<any[]> = new EventEmitter<any[]>();
  
 
  
  constructor(private restaurantService: RestaurantService){};

  ngOnInit(): void {  
    const objet = this.restaurantService.getRestaurantList().subscribe((res) =>{
      this.restaurantList = res.data;
      this.restaurantListOutput.emit(this.restaurantList); 
      console.log(res);
    });
  }
}

