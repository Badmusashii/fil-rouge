import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Output() reviewSubmitted = new EventEmitter<string>();
  reviewText: string = '';

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
