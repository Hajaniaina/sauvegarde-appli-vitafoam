import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../services/quiz-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  constructor(private quizServ : QuizServiceService,private navCtrl: NavController,private route: Router) { }

  public lesQuizs=[];
  //public dataResponse=[];
  ngOnInit() {
    this.lesQuizs = this.quizServ.listeQuiz;
  }

  onbackPress(){
      this.navCtrl.back();
  }

  public onQuizClick(quiz){
    let vreponse = this.quizServ.Indicevreponse;
    if (quiz.indice == vreponse){
      this.quizServ.dataResponse=quiz;
      this.quizServ.felicitation = "Bien joué!";
      //console.log(this.quizServ.dataResponse);
    }else{
      this.quizServ.dataResponse=[];
      this.quizServ.felicitation =  "Vous avez peredu!!";
    }
   // console.log(quiz);
    this.route.navigateByUrl("/quiz-show-response");
  }

}
