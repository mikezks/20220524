import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VertragDomainModule } from '@nx-monorepo/vertrag/domain';
import { VertragOverviewComponent } from './vertrag-overview.component';
import { RouterModule } from '@angular/router';
import { VertragListeModule } from '@nx-monorepo/vertrag/ui-common';

@NgModule({
  imports: [
    CommonModule,
    VertragDomainModule,
    VertragListeModule,
    RouterModule.forChild([{ path: '', component: VertragOverviewComponent }])
  ],
  declarations: [VertragOverviewComponent],
  exports: [VertragOverviewComponent],
})
export class VertragFeatureVertragOverviewModule {}
