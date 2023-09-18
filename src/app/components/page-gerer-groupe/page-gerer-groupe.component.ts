import { Component, OnInit } from '@angular/core';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-page-gerer-groupe',
  templateUrl: './page-gerer-groupe.component.html',
  styleUrls: ['./page-gerer-groupe.component.css'],
})
export class PageGererGroupeComponent implements OnInit {
  groupes: any[] = [];
  constructor(private groupeService: GroupeService) {}
  ngOnInit(): void {
    this.groupeService.getAllGroupeForUser().subscribe((res) => {
      this.groupes = res;
      // console.log(groupes);
    });
  }
}
