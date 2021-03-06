import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {NavmenuComponent} from './shared/components/navmenu/navmenu.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptService} from './services/intercept-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavmenuComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
