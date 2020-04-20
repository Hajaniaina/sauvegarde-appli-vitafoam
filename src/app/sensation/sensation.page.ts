import { EnfantServiceService } from './../services/enfant-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sensation',
  templateUrl: './sensation.page.html',
  styleUrls: ['./sensation.page.scss'],
})
export class SensationPage implements OnInit {

  constructor(private enfenServ: EnfantServiceService, private router: Router, private navCtrl: NavController,public loadingController:LoadingController) { }
  public sensation =[];
  public nombre_case_radio=3;
  public value_par_def_case = "Moyen";

  ngOnInit() {
    this.enfenServ.loadingPage(this.loadingController);

    this.sensation = this.enfenServ.sensation;
    this.nombre_case_radio = 12/this.sensation.length;
    if(this.sensation.length>0){
      this.value_par_def_case = this.sensation[1].stion;
    }
    
    /*
      Donner un valeur par defaut au produit
      SI on choisi moyen sans ' focused ', la valeur de radio bouton = this.enfenServ.sensation_par_defaut.produit
      Pour eviter le null au radio buton selectionné par defaut
    */
    console.log(this.enfenServ.sensation_par_defaut);
     this.enfenServ.produit = this.enfenServ.sensation_par_defaut.produit;  
  }

  onSensationClick(sensation){
    this.enfenServ.produit = sensation.produit;
    console.log(this.enfenServ.produit);
    //this.router.navigateByUrl ("/produits");

  }

  logFormSensation(){
    console.log(this.enfenServ.produit);
    //this.onSensationClick(this.sens);
    this.router.navigateByUrl("/produits");
  }

  onbackPress() {
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
