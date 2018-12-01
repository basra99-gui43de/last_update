import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ResturantSearchPage } from '../resturant-search/resturant-search';
import { EatingSearchPage } from '../eating-search/eating-search';
import { MapPage } from '../map/map'

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(    public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {


  }


goToResturantSearch(){
this.navCtrl.setRoot(ResturantSearchPage);
}

goToEatingSearch(){
  this.navCtrl.setRoot(EatingSearchPage);
  }

  openMap(){
    this.navCtrl.push(MapPage)
  }


  ionViewDidLoad() {
  }

}
