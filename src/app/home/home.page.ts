import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,public loadingController: LoadingController) {}

  choisirUnMatelas(){
    this.router.navigateByUrl("/personne-categorie");
  }

  onEvaluerChowRoom(){

  }

  onQuizVitafoam(){
    this.router.navigateByUrl("/accueil-quiz");
  }

  async loadingPage(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 3000
    });

    await loading.present();
  }

}
