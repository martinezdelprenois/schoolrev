import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewerLoginPage } from './reviewer-login';

@NgModule({
  declarations: [
    ReviewerLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewerLoginPage),
  ],
})
export class ReviewerLoginPageModule {}
