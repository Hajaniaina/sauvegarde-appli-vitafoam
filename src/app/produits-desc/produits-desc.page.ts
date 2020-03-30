import { EnfantServiceService } from './../services/enfant-service.service';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-produits-desc',
  templateUrl: './produits-desc.page.html',
  styleUrls: ['./produits-desc.page.scss'],
})
export class ProduitsDescPage implements OnInit {

  constructor(private enfantServ: EnfantServiceService, private navCtrl: NavController,public loadingController:LoadingController,public actionSheetController: ActionSheetController) { }

  public prodDesc;
  ngOnInit() {
    this.enfantServ.loadingPage(this.loadingController);

    this.prodDesc = this.enfantServ.produitDesc;
  }

  onbackPress() {
    this.navCtrl.back();
  }

  onACtionProduitClic(){
      this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      mode:"ios",
      animated:true,
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
