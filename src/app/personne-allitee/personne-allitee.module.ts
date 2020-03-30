import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonneAlliteePageRoutingModule } from './personne-allitee-routing.module';

import { PersonneAlliteePage } from './personne-allitee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonneAlliteePageRoutingModule
  ],
  declarations: [PersonneAlliteePage]
})
export class PersonneAlliteePageModule {}
