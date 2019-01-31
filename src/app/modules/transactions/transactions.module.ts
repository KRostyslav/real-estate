import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionsComponent} from './transactions.component';
import {TransactionsRouterModule} from './transactions-router.module';

@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    TransactionsRouterModule,
  ]
})
export class TransactionsModule {
}
