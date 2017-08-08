import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomeSchoolPage } from '../home-school/home-school';

/**
 * Generated class for the SchoolLoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-school-login',
  templateUrl: 'school-login.html',
})
export class SchoolLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolLoginPage');
  }

  SchoolLogin()
  {
  this.navCtrl.push(HomeSchoolPage);
  }

}
