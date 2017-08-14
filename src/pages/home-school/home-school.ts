import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

import { SchoolAccountPage } from '../school-account/school-account';

/**
 * Generated class for the HomeSchoolPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-school',
  templateUrl: 'home-school.html',
})
export class HomeSchoolPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeSchoolPage');
  }

  account(){
  this.navCtrl.push(SchoolAccountPage);
  }
share(){
   
    this.socialSharing.share("Testing, sharing this from inside an app I'm building right now", null, null, null); 
  }
}
