import { Component, OnInit } from '@angular/core';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-groupe-list',
  templateUrl: './groupe-list.component.html',
  styleUrls: ['./groupe-list.component.css']
})
export class GroupeListComponent implements OnInit {
  groupeList: any;
  constructor(private groupeService: GroupeService){}
  ngOnInit(): void {
    const objet = this.groupeService.getAllGroupForMember().subscribe((res) =>{
      this.groupeList = res;
      console.log(res);
    });
  }
}
