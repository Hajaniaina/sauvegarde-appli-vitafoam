import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonneAlliteePage } from './personne-allitee.page';

const routes: Routes = [
  {
    path: '',
    component: PersonneAlliteePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonneAlliteePageRoutingModule {}
