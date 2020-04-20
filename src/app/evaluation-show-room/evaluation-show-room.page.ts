import { Sim } from '@ionic-native/sim/ngx';
import { Network } from '@ionic-native/network/ngx';
import { EnfantServiceService } from './../services/enfant-service.service';
import { Router } from '@angular/router';
import { NavController, LoadingController, ActionSheetController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { EvaluationShowRoomServiceService } from '../services/evaluation-show-room-service.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-evaluation-show-room',
  templateUrl: './evaluation-show-room.page.html',
  styleUrls: ['./evaluation-show-room.page.scss'],
})
export class EvaluationShowRoomPage implements OnInit {

  constructor(private httpClient:HttpClient, private actionSheetController: ActionSheetController,private evalSRomm:EvaluationShowRoomServiceService,private navCtrl : NavController,private router: Router,private enfServ: EnfantServiceService,private loadingController:LoadingController,private network: Network,private alertController: AlertController,
    private sim :Sim) { }
   listeShowRoom = [];
  ngOnInit() {
    this.enfServ.loadingPage(this.loadingController);
    this.listeShowRoom = this.evalSRomm.getListShowRoom();
  }

  onShowRoomClick(sRoom){
     this.evalSRomm.listeOptiondeVote = sRoom;
     //console.log(this.evalSRomm.listeOptiondeVote);
     //this.router.navigateByUrl("/voter-show-room");
      this.donnerOpionionSroom(sRoom);
    
  }

  async donnerOpionionSroom(sRoom) {
    let listeOpions = this.createBoutonsOptions(sRoom.vote.options,sRoom.vote.indices,sRoom.showroom,sRoom.indiceSroom);
    const actionSheet = await this.actionSheetController.create({
      header: sRoom.showroom,
      mode:"ios",
      cssClass:"sheetVoteSroom",
      buttons: listeOpions
    });
    await actionSheet.present();
  }

   createBoutonsOptions(listeOpions,indice,sroomname,indiceSroom){
    let buttons = Array();
    let dernierIndice = 0;
    //let phoneNumber = this.getSimNumber();
    for (let i = 0; i < listeOpions.length; i++) {
      buttons [i] = {
        text: listeOpions[i],
        //icon: 'heart',
        handler: () => {
          this.sendVoteShowRoom("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0623f18a7451b7af6a1199f1a2d8df66",indice[i],listeOpions[i],sroomname,indiceSroom,"0345048260","0123456789");
         
        }
      }
      dernierIndice++;
    }
    buttons[dernierIndice] = { text: 'Annuler', role: 'cancel',icon: 'close' }
    console.log(buttons);
    return buttons;
  }

  async sendVoteShowRoom(url,indice,choix,sRoom,indiceSroom,phonenumber,imei){
    url = url+"/"+indiceSroom+"/"+indice+"/"+choix+"/"+phonenumber+"/"+imei;
    this.httpClient.get(url)
    .subscribe(data=>{
        console.log(data);
        this.createAlert("Vote","","Merci pour votre vote","OK");
    },err=>{
      this.createAlert("Vote","","Une erreur s'est produite, verifiez votre connexion","OK");
    });
 }

 getSimNumber(){
  this.sim.getSimInfo().then(
    (info) => {
      console.log('Sim info: ', info);
      return info.phoneNumber;
    },
    (err) =>{
      console.log('Unable to get sim info: ', err)
    } 
  );
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
