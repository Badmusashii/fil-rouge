import { Component, Input, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/interfaces/member.interface';
import { Restaurant } from 'src/app/interfaces/restaurant.interface';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css'],
})
export class CardGroupComponent implements OnInit {
  memberList: Member[] | undefined;
  restaurantList: Restaurant[] | undefined;
  @Input() groupe: any;

  constructor(
    private memberService: MemberService,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.memberService.getMemberForGroup(this.groupe.id).subscribe((res) => {
      this.memberList = res;
    });

    // A MODIFIER AVEC LE BACK : get restaurants by group
    // this.restaurantService.getRestaurantList().subscribe((res) =>{
    //   this.restaurantList = res.data;
    // });

    // this.restaurantService
    //   .findRestaurantsByMemberGroups(this.groupe.id)
    //   .subscribe((res) => {
    //     this.restaurantList = res[this.groupe.id.toString()]; // Ajustez cette ligne selon la structure de vos données.
    //   });

    this.restaurantService.findRestaurantsByMemberGroups().subscribe((res) => {
      console.log('Réponse complète:', res);
      console.log('ID du groupe:', this.groupe.id);

      const restaurantsForGroup = res[this.groupe.id.toString()];
      console.log('Restaurants pour ce groupe:', restaurantsForGroup);

      if (restaurantsForGroup) {
        this.restaurantList = restaurantsForGroup;
      } else {
        console.warn('Aucun restaurant trouvé pour ce groupe.');
      }
    });
  }
}
