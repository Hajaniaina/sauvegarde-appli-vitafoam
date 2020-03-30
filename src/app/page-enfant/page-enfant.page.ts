import { EnfantServiceService } from './../services/enfant-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-enfant',
  templateUrl: './page-enfant.page.html',
  styleUrls: ['./page-enfant.page.scss'],
})
export class PageEnfantPage implements OnInit {

  public  listeProbleme;
  constructor(private enfentService: EnfantServiceService, private router: Router, private navCtrl:NavController) { }

  ngOnInit() {
    this.listeProbleme = this.enfentService.getProblemeEnfant();
    //this.onProblemeClick(this.listeProbleme[0]);
  }

  onProblemeClick(pblm){
    this.enfentService.sensation = pblm.sensation;
    this.enfentService.sensation_par_defaut = pblm.sensation[1];
    
    console.log(this.enfentService.sensation);
    this.router.navigateByUrl("/sensation");
  }

  onbackPress() {
    this.navCtrl.back();
  }

}
