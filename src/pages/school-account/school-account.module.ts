import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolAccountPage } from './school-account';

@NgModule({
  declarations: [
    SchoolAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolAccountPage),
  ],
})
export class SchoolAccountPageModule {}
