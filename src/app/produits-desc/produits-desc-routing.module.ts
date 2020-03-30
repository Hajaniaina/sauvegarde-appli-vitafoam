import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitsDescPage } from './produits-desc.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitsDescPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitsDescPageRoutingModule {}
