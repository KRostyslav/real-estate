import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainInfoBlockComponent} from './main-info-block/main-info-block.component';
import {InfoBlockComponent} from './info-block/info-block.component';
import {OfferingsComponent} from './offerings.component';
import {OfferingsRouterModule} from './offerings-router.module';

@NgModule({
  declarations: [
    MainInfoBlockComponent,
    InfoBlockComponent,
    OfferingsComponent,
  ],
  imports: [
    CommonModule,
    OfferingsRouterModule,
  ],

})
export class OfferingsModule {
}
