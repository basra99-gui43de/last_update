import { TableOrderPage } from './../table-order/table-order';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Subscription } from 'rxjs/Subscription';
import { MenuPage } from '../menu/menu';
/**
 * Generated class for the ResturantDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resturant-details',
  templateUrl: 'resturant-details.html',
})
export class ResturantDetailsPage {
  id: any;
  userKey: string;
  data = {
    name : '' ,
    phone :  '' ,
    location: ''
   };
   items: any;
   itemList: Subscription;

  constructor(private authServiceProvider:AuthServiceProvider, public db: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
   this.id = this.navParams.get('key');
   this.data.name = this.navParams.get('name');
   this.data.location = this.navParams.get('location');
   this.data.phone = this.navParams.get('phone');
console.log('myiddddddddd', this.id);
// console.log('my array',  this.data.name, this.data.location , this.data.phone);

  }

  goToMenu(rest_key){
    this.navCtrl.push(MenuPage,{
      data:{
        "rkey": rest_key,
        "tnum": "00"
      }
    });
    console.log(' key:rest_key',rest_key);

  }

  ionViewDidLoad() {
    this.itemList = this.authServiceProvider.getRestaurants('restaurants').subscribe(items => {
      this.items = items;

    });
  }
  tableOrder(rest_key){
    this.navCtrl.push(TableOrderPage , {
      restKey:rest_key
    });
  }
}
export class ListItemClass {
  $key: string;
  name: string;
  phone:  string;
  location: string;
}
