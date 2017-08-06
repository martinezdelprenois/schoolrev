import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeReviewerPage } from './home-reviewer';

@NgModule({
  declarations: [
    HomeReviewerPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeReviewerPage),
  ],
})
export class HomeReviewerPageModule {}
