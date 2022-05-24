import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Hello Angular! :)';

  changeTitle(): void {
    this.title = 'My new, fancy title! :)';
  }
}
