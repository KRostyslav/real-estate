import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundComponent} from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    data: {title: 'Dashboard'},
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'offerings',
    data: {title: 'Offering'},
    loadChildren: './modules/offerings/offerings.module#OfferingsModule'
  },
  {
    path: 'transactions',
    data: {title: 'Transations'},
    loadChildren: './modules/transactions/transactions.module#TransactionsModule'
  },
  {
    path: 'settings',
    data: {title: 'Settings'},
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
