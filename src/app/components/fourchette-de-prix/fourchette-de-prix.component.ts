import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fourchette-de-prix',
  templateUrl: './fourchette-de-prix.component.html',
  styleUrls: ['./fourchette-de-prix.component.css'],
})
export class FourchetteDePrixComponent {
  @Output() priceChanged = new EventEmitter<string>();
  @Input() choixprix: boolean | undefined;
  selectedPrice!: string;
  prices: any;

  onPriceChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedPrice = selectElement.value;
    this.priceChanged.emit(this.selectedPrice);
  }
}
