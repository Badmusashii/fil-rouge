import { Component, Input, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/interfaces/member.interface';
import { Restaurant } from 'src/app/interfaces/restaurant.interface';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css']
})
export class CardGroupComponent implements OnInit{
  pseudo: string | undefined = 'titi';
  nameResto: string | undefined = 'bon ap';
  memberList: Member[] | undefined;
  restaurantList: Restaurant[] | undefined;
  @Input() groupe : any;

  
  // Initialisez un compteur de pouces en l'air
  numberOfThumbsUp: number = 0;
  numberOfThumbsDown: number = 0;
  avisSubject: any;
  // modalComponent: any;
  constructor(private memberService: MemberService,private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.memberService.getMemberForGroup(this.groupe.id).subscribe((res) =>{
      this.memberList = res;
    });

    // A MODIFIER AVEC LE BACK : get restaurants by group
    this.restaurantService.getRestaurantList().subscribe((res) =>{
      this.restaurantList = res.data;
    });
  }
}

