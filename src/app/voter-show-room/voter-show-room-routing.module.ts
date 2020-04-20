import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoterShowRoomPage } from './voter-show-room.page';

const routes: Routes = [
  {
    path: '',
    component: VoterShowRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoterShowRoomPageRoutingModule {}
