import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ReviewerLoginPage } from '../reviewer-login/reviewer-login';
import { SchoolLoginPage }    from '../school-login/school-login';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loadLogin(){
  this.navCtrl.push(SchoolLoginPage);
  }

  loadRevLogin(){
  this.navCtrl.push(ReviewerLoginPage);
  }

}
