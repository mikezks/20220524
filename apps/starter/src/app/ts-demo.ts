/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Flight } from "./entities/flight";

export function tsDemo(): void {
  let a: any = 'Hallo Teilnehmer!';
  a = 1;

  const fManager = new MyFlightManager();
  fManager.setFlights([]);
}


export class MyFlightManager {
  flights: Flight[] = [];

  setFlights(flights: Flight[]): void {
    this.flights.concat(flights);
  }
}
