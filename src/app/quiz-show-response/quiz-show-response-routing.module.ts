import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizShowResponsePage } from './quiz-show-response.page';

const routes: Routes = [
  {
    path: '',
    component: QuizShowResponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizShowResponsePageRoutingModule {}
