import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilQuizPageRoutingModule } from './accueil-quiz-routing.module';

import { AccueilQuizPage } from './accueil-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilQuizPageRoutingModule
  ],
  declarations: [AccueilQuizPage]
})
export class AccueilQuizPageModule {}
