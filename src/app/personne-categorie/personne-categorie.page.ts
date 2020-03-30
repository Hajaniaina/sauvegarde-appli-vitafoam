import { EnfantServiceService } from './../services/enfant-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-personne-categorie',
  templateUrl: './personne-categorie.page.html',
  styleUrls: ['./personne-categorie.page.scss'],
})
export class PersonneCategoriePage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController,private enfServ: EnfantServiceService,public loadingController: LoadingController) { }

  public  listeProbleme;
  ngOnInit() {
    this.enfServ.loadingPage(this.loadingController);
  }
  
  onEnfantClick(){
    this.listeProbleme = this.enfServ.getProblemeEnfant();
    this.enfServ.sensation = this.listeProbleme[0].sensation;
    this.enfServ.sensation_par_defaut = this.listeProbleme[0].sensation[1];
    //console.log(this.enfServ.sensation);
    this.router.navigateByUrl("/sensation");
    //this.router.navigateByUrl("/page-enfant")
  }

  onPersonneAgeeClick(){
    this.listeProbleme = this.enfServ.getProblemePersoneeAgee();
    this.enfServ.sensation = this.listeProbleme[0].sensation;
    this.enfServ.sensation_par_defaut = this.listeProbleme[0].sensation[1];
    //console.log(this.enfServ.sensation);
    this.router.navigateByUrl("/sensation");
  }
  onFemmeAceinteClick(){
    this.listeProbleme = this.enfServ.getProblemeFemmeAceinte();
    this.enfServ.sensation = this.listeProbleme[0].sensation;
    this.enfServ.sensation_par_defaut = this.listeProbleme[0].sensation[1];
   // console.log(this.enfServ.sensation);
    this.router.navigateByUrl("/sensation");
  }
  onPersonneAlliteClic(){
    this.listeProbleme = this.enfServ.getProblemePersonneAllite();
    this.enfServ.sensation = this.listeProbleme[0].sensation;
    this.enfServ.sensation_par_defaut = this.listeProbleme[0].sensation[1];
    this.enfServ.produit = this.listeProbleme[0].sensation[0].produit;
   // console.log(this.enfServ.sensation);
    this.router.navigateByUrl("/produits");
  }
  onAdulteClic(){
    this.listeProbleme = this.enfServ.getProblemeAdulte();
    this.router.navigateByUrl("/adulte")
  }

  onbackPress(){
    this.navCtrl.back();
  }
}
