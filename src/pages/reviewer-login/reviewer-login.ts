import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomeReviewerPage } from '../home-reviewer/home-reviewer';

/**
 * Generated class for the ReviewerLoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reviewer-login',
  templateUrl: 'reviewer-login.html',
})
export class ReviewerLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewerLoginPage');
  }

  RevLogin(){
this.navCtrl.push(HomeReviewerPage);
  }

}
