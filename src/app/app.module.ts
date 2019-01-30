import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {NavmenuComponent} from './shared/navmenu/navmenu.component';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {OfferingsModule} from './modules/offerings/offerings.module';
import {SettingsModule} from './modules/settings/settings.module';
import {TransactionsModule} from './modules/transactions/transactions.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavmenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // DashboardModule,
    // OfferingsModule,
    // TransactionsModule,
    // SettingsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
