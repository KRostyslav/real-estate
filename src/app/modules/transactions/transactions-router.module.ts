import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TransactionsComponent} from './transactions.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TransactionsRouterModule {
}
