import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Groupes } from 'src/app/models/groupes';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-groupe-list',
  templateUrl: './groupe-list.component.html',
  styleUrls: ['./groupe-list.component.css'],
})
export class GroupeListComponent implements OnInit {
  @Output() groupeChanged = new EventEmitter<string>();
   // La propriété allList = true permet d'afficher une option "Tous" dans le Select
  @Input() allList: boolean | undefined; 
  groupeList!: Groupes[];
  constructor(private groupeService: GroupeService)  {}
  ngOnInit(): void {
    const objet = this.groupeService.getAllGroupeForUser().subscribe((res) => {
      this.groupeList = res;
      console.log(this.groupeList);
    });
  }
  onGroupeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedId = selectElement.value;
    // console.log(selectElement.value);
    const selectedCategorie = this.groupeList.find(
      (groupe: { id: number }) => groupe.id === +selectedId
    );
    this.groupeChanged.emit(selectedId);
  }
}
