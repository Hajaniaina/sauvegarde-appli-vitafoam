import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../services/quiz-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-quiz-show-response',
  templateUrl: './quiz-show-response.page.html',
  styleUrls: ['./quiz-show-response.page.scss'],
})
export class QuizShowResponsePage implements OnInit {

  constructor(private quizServ: QuizServiceService,private navCtr: NavController) { }
 public resposeQuiz;
 public msgFelicitation;

  ngOnInit() {
    this.resposeQuiz = this.quizServ.dataResponse;
    this.msgFelicitation = this.quizServ.felicitation;
  }

  onbackPress(){
     this.navCtr.back();
  }

  onQuizSuivantClick(){
    
  }

}
