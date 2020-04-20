import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvaluationShowRoomPage } from './evaluation-show-room.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluationShowRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluationShowRoomPageRoutingModule {}
