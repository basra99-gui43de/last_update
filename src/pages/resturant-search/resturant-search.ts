import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ResturantDetailsPage } from '../resturant-details/resturant-details';
import { Subscription } from 'rxjs/Subscription';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ResturantSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resturant-search',
  templateUrl: 'resturant-search.html',
})
export class ResturantSearchPage {
  items: any;
  itemList: Subscription;
  private isOn: boolean = false;
  constructor(private authServiceProvider:AuthServiceProvider,   public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {

  }
  doRefresh(refresher) {
    this.items;
       refresher.complete();
   }
  moreInfo(key, phone, location, name) {
    this.navCtrl.push(ResturantDetailsPage, {
      key:key,
      phone:phone,
      location:location,
      name:name
    }).then(() =>{
      console.log('details',key, name,phone, location );
    });
  }

  ionViewDidLoad() {
    this.itemList = this.authServiceProvider.getRestaurants('restaurants').subscribe(items => {
      this.items = items;
    });
  }



}
