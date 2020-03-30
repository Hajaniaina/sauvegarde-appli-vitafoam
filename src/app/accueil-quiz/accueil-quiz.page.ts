import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { QuizServiceService } from '../services/quiz-service.service';

@Component({
  selector: 'app-accueil-quiz',
  templateUrl: './accueil-quiz.page.html',
  styleUrls: ['./accueil-quiz.page.scss'],
})
export class AccueilQuizPage implements OnInit {

  public typeQuiz;
  constructor(private navCtrl: NavController,private quizServ : QuizServiceService,private route: Router) { }

  ngOnInit() {
    this.typeQuiz = this.quizServ.getTypeQuiz();
  }

  onbackPress() {
    this.navCtrl.back();
  }

  onTypeQuizClick(data){
    console.log(data);
    this.quizServ.listeQuiz = data[0].listechoix;
    this.quizServ.Indicevreponse = data[0].vreponse;
    console.log(data[0]);
    this.route.navigateByUrl("/quiz");

  }
}
