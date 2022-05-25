import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flight } from '../../../entities/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
})
export class FlightCardComponent {
  @Input() item: Flight | undefined;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
