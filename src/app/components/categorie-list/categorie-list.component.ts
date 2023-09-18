import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit{
  categorieList: any;
  constructor(private categorieService: CategorieService){}
  ngOnInit(): void {
    const objet = this.categorieService.getCategorieList().subscribe((res) =>{
      
      this.categorieList = res;
      console.log(res);

    });
  }
}
