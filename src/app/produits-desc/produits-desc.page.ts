import { async } from '@angular/core/testing';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { EnfantServiceService } from './../services/enfant-service.service';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ActionSheetController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-produits-desc',
  templateUrl: './produits-desc.page.html',
  styleUrls: ['./produits-desc.page.scss'],
})
export class ProduitsDescPage implements OnInit {

  constructor(private enfantServ: EnfantServiceService, private navCtrl: NavController,public loadingController:LoadingController,public actionSheetController: ActionSheetController,
    private socialeShare:SocialSharing,private alertController:AlertController) { }

  public prodDesc;
  ngOnInit() {
    this.enfantServ.loadingPage(this.loadingController);

    this.prodDesc = this.enfantServ.produitDesc;
  }

  onbackPress() {
    this.navCtrl.back();
  }

  async onACtionShareProduitClic(){
     // this.presentActionSheet();
      let message = this.prodDesc.desc;
      let subject= this.prodDesc.pord;
      let file = "./assets/img/produits/"+this.prodDesc.img;
      let url = "https://www.vitafoam.mg/";

      this.shareSociale(message,subject,file,url);
  }
  async actionDemandeDevisClick(){
    // this.presentActionSheet();
    let message = this.prodDesc.desc;
    let subject= this.prodDesc.pord;
    let file = "./assets/img/produits/"+this.prodDesc.img;//this.prodDesc.img
    let url = "https://www.vitafoam.mg/";
    this.shareMail(message,subject,file,url,"dev.m2realisation@gmail.com");
  }
  async onShareFacebookClic(){
    let message = this.prodDesc.desc;
    let subject= this.prodDesc.pord;
    //let file = this.prodDesc.img;
    let file = "./assets/img/produits/"+this.prodDesc.img; //this.prodDesc.img
    let url = "https://www.vitafoam.mg/";
    this.shareFacebook(message,file,url);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      mode:"ios",
      animated:true,
      buttons: [{
        text: 'Partager',
        icon: 'share',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Demander un devis',
        icon: 'mail',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Trouver un showRoom',
        icon: 'locate',
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

  //Social sharing
  public shareSociale(message, subject, file, url){
    this.socialeShare.share(message, subject, file, url)
    .then(()=>{
        
    }).catch(()=>{
      
    });

  }

  public shareMail(message, subject, file, url,dest){
    this.socialeShare.canShareViaEmail().then(() => {
    }).catch(() => {
      
    });

    // Share via email
    this.socialeShare.shareViaEmail(message, subject, [dest]).then(() => {
      
    }).catch(() => {
      
    });
  }

   // Share via facebook
  public shareFacebook(message, image, url){
    this.socialeShare.shareViaFacebook(message, image, url).then(() => {
      
    }).catch(() => {
      
    });
  }

  async createAlert(title,subtitle,message,btn) {
    const alert = await this.alertController.create({
      header: title,
      subHeader: subtitle,
      message: message,
      buttons: [btn]
    });
    await alert.present();
  }
  
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }
}
