import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FemmeAceintePageRoutingModule } from './femme-aceinte-routing.module';

import { FemmeAceintePage } from './femme-aceinte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FemmeAceintePageRoutingModule
  ],
  declarations: [FemmeAceintePage]
})
export class FemmeAceintePageModule {}
