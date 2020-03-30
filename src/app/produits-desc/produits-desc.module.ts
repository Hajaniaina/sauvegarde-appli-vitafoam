import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitsDescPageRoutingModule } from './produits-desc-routing.module';

import { ProduitsDescPage } from './produits-desc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitsDescPageRoutingModule
  ],
  declarations: [ProduitsDescPage]
})
export class ProduitsDescPageModule {}
