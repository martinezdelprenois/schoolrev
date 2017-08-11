import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage} from '../pages/signup/signup';
import { InstitutionSignupPage} from '../pages/institution-signup/institution-signup';
import { ReviewerSignupPage} from '../pages/reviewer-signup/reviewer-signup';
import { HomeSchoolPage } from '../pages/home-school/home-school';
import { HomeReviewerPage } from '../pages/home-reviewer/home-reviewer';
import { LoginPage }        from '../pages/login/login';
import { ReviewerLoginPage } from '../pages/reviewer-login/reviewer-login';
import { SchoolLoginPage }   from '../pages/school-login/school-login';
import { ReviewerAccountPage } from '../pages/reviewer-account/reviewer-account';
import { AccountEditPage } from '../pages/account-edit/account-edit';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    InstitutionSignupPage,
    ReviewerSignupPage,
    HomeReviewerPage,
    HomeSchoolPage,
    LoginPage,
    SchoolLoginPage,
    ReviewerLoginPage,
    ReviewerAccountPage,
    AccountEditPage



  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    ReviewerSignupPage,
    InstitutionSignupPage,
    HomeReviewerPage,
    HomeSchoolPage,
    LoginPage,
    SchoolLoginPage,
    ReviewerLoginPage,
    ReviewerAccountPage,
    AccountEditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
