import { EnfantServiceService } from './../services/enfant-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  public produits = [];
  constructor(private enfServ: EnfantServiceService, private router: Router, private navCtrl: NavController,public loadingController:LoadingController) { }

  ngOnInit() {
    this.enfServ.loadingPage(this.loadingController);

    this.produits = this.enfServ.produit;
  }

  onProduitClic(prod){
    this.enfServ.produitDesc = prod;
    console.log(prod);
    this.router.navigateByUrl("/produits-desc");
  }
  onbackPress() {
    this.navCtrl.back();
  }

}
