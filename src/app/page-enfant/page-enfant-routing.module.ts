import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageEnfantPage } from './page-enfant.page';

const routes: Routes = [
  {
    path: '',
    component: PageEnfantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageEnfantPageRoutingModule {}
