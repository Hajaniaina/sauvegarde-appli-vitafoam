import { ContactPage } from './../contact/contact.page';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,public loadingController: LoadingController,private modalController: ModalController) {}

  choisirUnMatelas(){
    this.router.navigateByUrl("/personne-categorie");
  }

  onEvaluerChowRoom(){
       this.router.navigateByUrl("/evaluation-show-room");
  }

  onQuizVitafoam(){
   // this.router.navigateByUrl("/accueil-quiz");
  }

  async loadingPage(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 3000
    });

    await loading.present();
  }
  

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  //Modal pour la page contact
  async showContactPageModal() {
    const modal = await this.modalController.create({
      component: ContactPage,
      animated:true,
      mode:"ios"
    });
    return await modal.present();
  }



}
