import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InstitutionSignupPage} from '../institution-signup/institution-signup';
import { ReviewerSignupPage} from '../reviewer-signup/reviewer-signup';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

loadSignup(){

  this.navCtrl.push(InstitutionSignupPage);
}

loadRevSignup(){
	this.navCtrl.push(ReviewerSignupPage);
}

}
