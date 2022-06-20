import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './features/flight-search/flight-search.component';
import { FlightCardComponent } from './ui/flight-card/flight-card.component';
import { FlightEditComponent } from './features/flight-edit/flight-edit.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    FlightSearchComponent,
    FlightEditComponent
  ],
})
export class FlightBookingModule {}
