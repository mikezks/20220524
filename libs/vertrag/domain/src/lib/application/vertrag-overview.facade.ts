import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Vertrag } from '../entities/vertrag';
import { VertragDataService } from '../infrastructure/vertrag.data.service';

@Injectable({ providedIn: 'root' })
export class VertragOverviewFacade {
  private vertragListSubject = new BehaviorSubject<Vertrag[]>([]);
  vertragList$ = this.vertragListSubject.asObservable();

  constructor(private vertragDataService: VertragDataService) {}

  load(): void {
    this.vertragDataService.load().subscribe({
      next: (vertragList) => {
        this.vertragListSubject.next(vertragList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
