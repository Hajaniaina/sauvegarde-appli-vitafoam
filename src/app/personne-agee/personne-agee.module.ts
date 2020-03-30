import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonneAgeePageRoutingModule } from './personne-agee-routing.module';

import { PersonneAgeePage } from './personne-agee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonneAgeePageRoutingModule
  ],
  declarations: [PersonneAgeePage]
})
export class PersonneAgeePageModule {}
