import { Router } from '@angular/router';
import { EnfantServiceService } from './../services/enfant-service.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { EvaluationShowRoomServiceService } from '../services/evaluation-show-room-service.service';

@Component({
  selector: 'app-voter-show-room',
  templateUrl: './voter-show-room.page.html',
  styleUrls: ['./voter-show-room.page.scss'],
})
export class VoterShowRoomPage implements OnInit {

  constructor(private evalSRomm:EvaluationShowRoomServiceService,private navCtrl : NavController,private router: Router,private enfServ: EnfantServiceService,private loadingController:LoadingController) { }
  listeVoteUnShowRoom;
  ngOnInit() {
    this.enfServ.loadingPage(this.loadingController);
    this.listeVoteUnShowRoom = this.evalSRomm.listeOptiondeVote;
  }

  onbackPress(){
    this.navCtrl.back();
  }

}
