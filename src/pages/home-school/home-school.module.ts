import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeSchoolPage } from './home-school';

@NgModule({
  declarations: [
    HomeSchoolPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeSchoolPage),
  ],
})
export class HomeSchoolPageModule {}
