import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageEnfantPageRoutingModule } from './page-enfant-routing.module';

import { PageEnfantPage } from './page-enfant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageEnfantPageRoutingModule
  ],
  declarations: [PageEnfantPage]
})
export class PageEnfantPageModule {}
