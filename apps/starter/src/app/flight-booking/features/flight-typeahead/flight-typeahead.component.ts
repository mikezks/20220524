import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, timer, tap, share, EMPTY, filter, distinctUntilChanged, debounceTime, switchMap } from 'rxjs';
import { Flight } from '../../../entities/flight';

@Component({
  selector: 'app-flight-typeahead',
  templateUrl: './flight-typeahead.component.html',
  styleUrls: ['./flight-typeahead.component.css'],
})
export class FlightTypeaheadComponent implements OnInit, OnDestroy {
  timer$: Observable<number> = timer(0, 1000).pipe(
    tap(value => console.log('Observable Producer', value)),
    share()
  );
  subscription = new Subscription();

  control = new FormControl();
  flights$: Observable<Flight[]> = this.getFlightsStream$();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.rxjsDemo();
  }

  getFlightsStream$(): Observable<Flight[]> {
    return this.control.valueChanges.pipe(
      filter(city => city.length > 2),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(city => this.load$(city))
    );
  }

  load$(from: string): Observable<Flight[]>  {
    const url = "http://www.angular.at/api/flight";

    const params = new HttpParams()
                        .set('from', from);

    const headers = new HttpHeaders()
                        .set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, {params, headers});
  }

  rxjsDemo(): void {
    this.subscription.add(
      this.timer$
      .subscribe(console.log)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
