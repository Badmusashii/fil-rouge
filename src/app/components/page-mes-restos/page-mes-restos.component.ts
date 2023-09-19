import { Component, OnInit } from '@angular/core';
import { AvisService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-page-mes-restos',
  templateUrl: './page-mes-restos.component.html',
  styleUrls: ['./page-mes-restos.component.css'],
})
export class PageMesRestosComponent implements OnInit {
  avis: string[] = [];
  listeDesAvis: string[] = ['Avis 1', 'Avis 2', 'Avis 3'];
  
  constructor(private avisService: AvisService) {}

  ngOnInit() {
    this.avisService.getAvis().subscribe((nouveauxAvis) => {
      this.avis = nouveauxAvis;
    });
  }
}
