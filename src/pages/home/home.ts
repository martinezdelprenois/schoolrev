import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  Signup(){
  this.navCtrl.push(SignupPage);
  }

  loadLogin(){
  this.navCtrl.push(LoginPage);
  }

}
