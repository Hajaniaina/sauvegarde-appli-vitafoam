import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdultePageRoutingModule } from './adulte-routing.module';

import { AdultePage } from './adulte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdultePageRoutingModule
  ],
  declarations: [AdultePage]
})
export class AdultePageModule {}
