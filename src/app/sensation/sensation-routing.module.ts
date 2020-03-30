import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SensationPage } from './sensation.page';

const routes: Routes = [
  {
    path: '',
    component: SensationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SensationPageRoutingModule {}
