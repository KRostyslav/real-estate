import {NgModule} from '@angular/core';
import {OfferingsComponent} from './offerings.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OfferingsComponent
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
