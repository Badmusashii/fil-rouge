import { Component } from '@angular/core';
import { Groupes } from 'src/app/models/groupes';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent {
  groupeList?: Groupes[];
  constructor(private groupeService: GroupeService) {}
  ngOnInit(): void {
    this.groupeService.getAllGroupeForUser().subscribe((res) => {
      this.groupeList = res;
    });
  }
}
