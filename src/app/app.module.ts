import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage} from '../pages/signup/signup';
import { InstitutionSignupPage} from '../pages/institution-signup/institution-signup';
import { ReviewerSignupPage} from '../pages/reviewer-signup/reviewer-signup';
import { HomeSchoolPage } from '../pages/home-school/home-school';
import { HomeReviewerPage } from '../pages/home-reviewer/home-reviewer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    InstitutionSignupPage,
    ReviewerSignupPage,
    HomeReviewerPage,
    HomeSchoolPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    ReviewerSignupPage,
    InstitutionSignupPage,
    HomeReviewerPage,
    HomeSchoolPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
