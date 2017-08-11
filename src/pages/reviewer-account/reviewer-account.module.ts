import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReviewerAccountPage } from './reviewer-account';

@NgModule({
  declarations: [
    ReviewerAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(ReviewerAccountPage),
  ],
})
export class ReviewerAccountPageModule {}
