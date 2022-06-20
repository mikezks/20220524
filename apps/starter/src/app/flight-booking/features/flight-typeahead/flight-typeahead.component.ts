import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer, tap, share } from 'rxjs';

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

  constructor() {}

  ngOnInit(): void {
    this.rxjsDemo();
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
