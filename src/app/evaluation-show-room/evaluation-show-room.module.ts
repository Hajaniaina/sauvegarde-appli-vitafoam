import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluationShowRoomPageRoutingModule } from './evaluation-show-room-routing.module';

import { EvaluationShowRoomPage } from './evaluation-show-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvaluationShowRoomPageRoutingModule
  ],
  declarations: [EvaluationShowRoomPage]
})
export class EvaluationShowRoomPageModule {}
