import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NavController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private navCtrl : NavController,private modalCtrl:ModalController,private socialeShare:SocialSharing,
    private callNumber:CallNumber) { }

  ngOnInit() {
  }


  onbackPress(){
    this.modalCtrl.dismiss();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  call(number){
    this.callNumber.callNumber(number, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  sendMail(mailadresse){
    let message = "";
    let subject= "Contact";
    let file ="";
    let url = "https://www.vitafoam.mg/";
    this.shareMail(message,subject,file,url,mailadresse);
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
}
