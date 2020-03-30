import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilQuizPage } from './accueil-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilQuizPageRoutingModule {}
