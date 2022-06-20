import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightEditComponent } from './features/flight-edit/flight-edit.component';
import { FlightSearchComponent } from './features/flight-search/flight-search.component';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';
import { FlightCardComponent } from './ui/flight-card/flight-card.component';
import { FlightTypeaheadComponent } from './features/flight-typeahead/flight-typeahead.component';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
    FlightTypeaheadComponent,
  ],
  imports: [CommonModule, FlightBookingRoutingModule, SharedModule],
})
export class FlightBookingModule {}
