import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-message',
  template: `
    <div class="info-message" [ngClass]="{ show: visible }">
      {{ message }}
    </div>
  `,
  styleUrls: ['./info-message.component.css'],
})
export class InfoMessageComponent {
  @Input() message: string = ''; // Message d'information initial vide
  @Input() visible: boolean = false; // Par défaut, le message n'est pas affiché

 }
