import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolLoginPage } from './school-login';

@NgModule({
  declarations: [
    SchoolLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolLoginPage),
  ],
})
export class SchoolLoginPageModule {}
