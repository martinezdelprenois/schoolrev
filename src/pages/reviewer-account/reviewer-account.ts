import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AccountEditPage } from '../account-edit/account-edit';

/**
 * Generated class for the ReviewerAccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reviewer-account',
  templateUrl: 'reviewer-account.html',
})
export class ReviewerAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewerAccountPage');
  }

  edit(){
  this.navCtrl.push(AccountEditPage);
  }
}
