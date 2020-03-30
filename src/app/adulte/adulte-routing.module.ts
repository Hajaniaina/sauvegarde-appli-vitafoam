import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdultePage } from './adulte.page';

const routes: Routes = [
  {
    path: '',
    component: AdultePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdultePageRoutingModule {}
