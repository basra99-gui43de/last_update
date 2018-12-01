import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EatingSearchPage } from './eating-search';

@NgModule({
  declarations: [
    EatingSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(EatingSearchPage),
  ],
})
export class EatingSearchPageModule {}
