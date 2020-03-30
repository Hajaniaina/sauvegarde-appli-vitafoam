import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonneCategoriePageRoutingModule } from './personne-categorie-routing.module';

import { PersonneCategoriePage } from './personne-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonneCategoriePageRoutingModule
  ],
  declarations: [PersonneCategoriePage]
})
export class PersonneCategoriePageModule {}
