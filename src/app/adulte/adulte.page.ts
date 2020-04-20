import { NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { EnfantServiceService } from './../services/enfant-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adulte',
  templateUrl: './adulte.page.html',
  styleUrls: ['./adulte.page.scss'],
})
export class AdultePage implements OnInit {

  constructor(private enfServ: EnfantServiceService,private router: Router,private navCtrl: NavController,private enfentService: EnfantServiceService,public loadingController: LoadingController) { }

  public listeProbleme;
  ngOnInit() {
  this.enfServ.loadingPage(this.loadingController);
  this.listeProbleme = this.enfServ.getProblemeAdulte();
  }

  onProblemeClick(pblm){
    this.enfentService.sensation = pblm.sensation;
    this.enfentService.sensation_par_defaut = pblm.sensation[1];
    
    console.log(this.enfentService.sensation);
    this.router.navigateByUrl("/sensation");
  }

  onbackPress(){
    this.navCtrl.back();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
}
