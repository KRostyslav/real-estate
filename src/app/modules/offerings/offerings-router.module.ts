import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OfferingsComponent} from './offerings.component';

const routes: Routes = [
  {
    path: '',
    component: OfferingsComponent,
    // data: { title: 'Offerrings' }
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class OfferingsRouterModule {
}
