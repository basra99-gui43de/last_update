import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResturantMapPage } from './resturant-map';

@NgModule({
  declarations: [
    ResturantMapPage,
  ],
  imports: [
    IonicPageModule.forChild(ResturantMapPage),
  ],
})
export class ResturantMapPageModule {}
