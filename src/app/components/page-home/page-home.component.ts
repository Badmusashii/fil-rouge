import { Component } from '@angular/core';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent {
  groupeList: any;
  constructor(private groupeService: GroupeService){}
  ngOnInit(): void {
    const objet = this.groupeService.getAllGroupForMember().subscribe((res) =>{
      this.groupeList = res;
    });
  }
}
