import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolEditPage } from './school-edit';

@NgModule({
  declarations: [
    SchoolEditPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolEditPage),
  ],
})
export class SchoolEditPageModule {}
