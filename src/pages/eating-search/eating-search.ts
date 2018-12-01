import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ResturantDetailsPage } from '../resturant-details/resturant-details';
import { Subscription } from 'rxjs/Subscription';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the EatingSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eating-search',
  templateUrl: 'eating-search.html',
})
export class EatingSearchPage {
  items: any;
  itemList: Subscription;
  sr=false;
  constructor(private authServiceProvider:AuthServiceProvider,   public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.itemList = this.authServiceProvider.getMenu('menu').subscribe(data => {
      this.items = data;
    });
  }


  doRefresh(refresher) {
   this.items;
      refresher.complete();
  }


moreInfo(restaurant_key){
  this.navCtrl.push(ResturantDetailsPage,{
    key:restaurant_key
  });
}

ser_Input(){
this.sr=!this.sr;
}

}
