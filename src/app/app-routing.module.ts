import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundComponent} from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'offerings',
    loadChildren: './modules/offerings/offerings.module#OfferingsModule'
  },
  {
    path: 'transactions',
    loadChildren: './modules/transactions/transactions.module#TransactionsModule'
  },
  {
    path: 'settings',
    loadChildren: './modules/settings/settings.module#SettingsModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
