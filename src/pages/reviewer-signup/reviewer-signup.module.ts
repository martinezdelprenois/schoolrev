import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewerSignupPage } from './reviewer-signup';

@NgModule({
  declarations: [
    ReviewerSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewerSignupPage),
  ],
})
export class ReviewerSignupPageModule {}
