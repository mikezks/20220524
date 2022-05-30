/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { Flight } from '../../../entities/flight';
import { FlightService } from '../../data-access/flight.service';


@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [
    // { provide: FlightService, useClass: DefaultFlightService }
  ]
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;

  basket: Record<number, boolean> = {
    3: true,
    5: true
  };

  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void {
    this.changeDomElementValue('DOM Element initial value.');

    setTimeout(() => {
      this.changeDomElementValue('DOM Element changed after 5 sec.');
    }, 5_000);
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        flights => this.flights = flights
      );
  }

  select(flight: Flight): void {
    this.selectedFlight = this.selectedFlight === flight ? undefined : flight;
  }

  changeDomElementValue(value: string): void {
    const messageField = document.getElementById('message') as HTMLInputElement;
    messageField.value = value;
  }
}
