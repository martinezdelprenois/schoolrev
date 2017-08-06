import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HomeReviewerPage } from '../home-reviewer/home-reviewer';

/**
 * Generated class for the ReviewerSignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reviewer-signup',
  templateUrl: 'reviewer-signup.html',
})
export class ReviewerSignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewerSignupPage');
  }

  logForm(){
  this.navCtrl.push('HomeReviewerPage');
  }

}
