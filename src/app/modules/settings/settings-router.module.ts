import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SettingsComponent} from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class SettingsRouterModule {
}
