import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';


const routes: Routes = [
  {
      path: '',
      redirectTo: 'vertrag',
      pathMatch: 'full'
  },
  {
      path: 'vertrag',
      loadChildren: () => import('@nx-monorepo/vertrag/feature-vertrag-overview')
          .then(esm => esm.VertragFeatureVertragOverviewModule)
  }
];


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
