import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstitutionSignupPage } from './institution-signup';

@NgModule({
  declarations: [
    InstitutionSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(InstitutionSignupPage),
  ],
})
export class InstitutionSignupPageModule {}
