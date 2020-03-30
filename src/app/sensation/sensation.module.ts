import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SensationPageRoutingModule } from './sensation-routing.module';

import { SensationPage } from './sensation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SensationPageRoutingModule
  ],
  declarations: [SensationPage]
})
export class SensationPageModule {}
