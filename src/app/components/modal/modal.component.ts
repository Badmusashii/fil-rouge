import { Component, EventEmitter, Output } from '@angular/core';
import { AvisService } from 'src/app/services/avis.service'; 

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Output() reviewSubmitted = new EventEmitter<string>();
  reviewText: string = '';

  constructor(private avisService: AvisService) {}
  openModal() {
    const modalElement = document.getElementById('myModal');
    if (modalElement !== null) {
      modalElement.style.display = 'block';
    }
  }

  closeModal() {
    const modalElement = document.getElementById('myModal');
    if (modalElement !== null) {
      modalElement.style.display = 'none';
    }
  }

  submitReview() {
    this.reviewSubmitted.emit(this.reviewText);
    this.reviewText = '';
    this.closeModal();
  }
  
}
// Réinitialisez le champ de texte après la soumission.
// Fermez la modale après la soumission.
