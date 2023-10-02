import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategorieService } from 'src/app/services/categorie.service';
import { ResponseApi } from 'src/app/models/response-api';
@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css'],
})
export class CategorieListComponent implements OnInit {
  @Output() categorieChanged = new EventEmitter<string>();
  // La propriété allList = true permet d'afficher une option "Tous" dans le Select
  @Input() allList: boolean | undefined;
  @Input() choixcategorie: boolean | undefined;
  selectedCategorie!: string;
  // prices: any;

  categorieList!: Categories[];
  constructor(private categorieService: CategorieService) {}
  ngOnInit(): void {
    this.categorieService.getCategorieList().subscribe((res) => {
      this.categorieList = res;
    });
  }
  onCategorieChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    console.log(selectElement);
    const selectedId = selectElement.value;
    // console.log(selectElement.value);
    // const selectedCategorie = this.categorieList.find(
    //   (categorie) => categorie.id === +selectedId
    // );
    // console.log(selectedCategorie);
    this.categorieChanged.emit(selectedId);
  }
}
