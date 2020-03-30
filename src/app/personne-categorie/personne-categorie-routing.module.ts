import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonneCategoriePage } from './personne-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: PersonneCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonneCategoriePageRoutingModule {}
