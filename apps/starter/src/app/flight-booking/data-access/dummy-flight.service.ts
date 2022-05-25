import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

@Injectable()
export class DummyFlightService implements FlightService {

  find(): Observable<Flight[]> {
    return of([
      {
        id: 999,
        from: 'New York',
        to: 'LA',
        date: new Date().toISOString(),
        delayed: false
      }
    ]);
  }
}
