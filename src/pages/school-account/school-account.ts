import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SchoolEditPage } from '../school-edit/school-edit';
/**
 * Generated class for the SchoolAccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-school-account',
  templateUrl: 'school-account.html',
})
export class SchoolAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchoolAccountPage');
  }

  edit(){
  this.navCtrl.push(SchoolEditPage);
  }

}
