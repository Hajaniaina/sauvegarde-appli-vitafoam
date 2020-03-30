import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FemmeAceintePage } from './femme-aceinte.page';

const routes: Routes = [
  {
    path: '',
    component: FemmeAceintePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FemmeAceintePageRoutingModule {}
