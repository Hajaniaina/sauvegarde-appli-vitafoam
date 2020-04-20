import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoterShowRoomPageRoutingModule } from './voter-show-room-routing.module';

import { VoterShowRoomPage } from './voter-show-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoterShowRoomPageRoutingModule
  ],
  declarations: [VoterShowRoomPage]
})
export class VoterShowRoomPageModule {}
