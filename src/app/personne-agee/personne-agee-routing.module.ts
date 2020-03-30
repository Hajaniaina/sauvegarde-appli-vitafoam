import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonneAgeePage } from './personne-agee.page';

const routes: Routes = [
  {
    path: '',
    component: PersonneAgeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonneAgeePageRoutingModule {}
