import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
})
export class RestaurantListComponent implements OnInit {
  @Input() restaurantList: any;
  @Output() restaurantListOutput: EventEmitter<any[]> = new EventEmitter<
    any[]
  >();
  @Output() restaurantSelected = new EventEmitter<string>();

  // La propriété allList = true permet d'afficher une option "Tous" dans le Select
  @Input() allList: boolean | undefined;
  @Input() choixrestaurant: boolean | undefined;

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    const objet = this.restaurantService
      .getRestaurantList()
      .subscribe((res) => {
        this.restaurantList = res.data;
        this.restaurantListOutput.emit(this.restaurantList);
        console.log(res);
      });
  }

  onRestaurantChange(event: Event) {
    const restaurantChoice = event.target as HTMLSelectElement;
    // console.log('que recupere t on de cet event : ', restaurantChoice.value);
    // this.restaurantSelected.emit(restaurantChoice.value);
    if (restaurantChoice.value === 'Tous les restaurants') {
      this.restaurantSelected.emit('all'); // ou 'Tous les restaurants', selon ce que vous utilisez dans votre logique
    } else {
      // this.selectedRestaurant = restaurantChoice.value;
      this.restaurantSelected.emit(restaurantChoice.value);
    }
  }
}
