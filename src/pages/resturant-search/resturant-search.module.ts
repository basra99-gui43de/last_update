import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResturantSearchPage } from './resturant-search';

@NgModule({
  declarations: [
    ResturantSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ResturantSearchPage),
  ],
})
export class ResturantSearchPageModule {}
