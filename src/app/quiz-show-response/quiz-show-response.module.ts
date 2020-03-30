import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizShowResponsePageRoutingModule } from './quiz-show-response-routing.module';

import { QuizShowResponsePage } from './quiz-show-response.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizShowResponsePageRoutingModule
  ],
  declarations: [QuizShowResponsePage]
})
export class QuizShowResponsePageModule {}
