import { Component, OnInit } from '@angular/core';
import { VertragOverviewFacade } from '@nx-monorepo/vertrag/domain';

@Component({
  selector: 'vertrag-vertrag-overview',
  templateUrl: './vertrag-overview.component.html',
  styleUrls: ['./vertrag-overview.component.scss'],
})
export class VertragOverviewComponent implements OnInit {
  vertragList$ = this.vertragOverviewFacade.vertragList$;

  constructor(private vertragOverviewFacade: VertragOverviewFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.vertragOverviewFacade.load();
  }
}
