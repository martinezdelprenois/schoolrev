import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the HomeReviewerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-reviewer',
  templateUrl: 'home-reviewer.html',
})
export class HomeReviewerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeReviewerPage');
  }

    regularShare(){
   
    this.socialSharing.share("Testing, sharing this from inside an app I'm building right now", null, null, null); 
  }

}
