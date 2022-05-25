import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';
import { Flight } from '../../entities/flight';

@Injectable({
  providedIn: 'root',
  useFactory: (http: HttpClient) => {
    if (environment.flightService === 'dummy') {
      return new DummyFlightService();
    }

    return new DefaultFlightService(http);
  },
  deps: [
    HttpClient
  ]
})
export abstract class FlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;

}
