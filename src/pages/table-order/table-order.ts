import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController , AlertController} from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the TableOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-table-order',
  templateUrl: 'table-order.html',
})
export class TableOrderPage {
  orderName:string ='';
  peoNum:number ;
  date:any = '';
  time:any = '';
  tableType:number ;
  private gpsListRef = this.db.list<any>('tableReservationOrder')

  constructor(public db:AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams , private toastCtrl: ToastController , public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TableOrderPage');
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'طلبك قيد التنفيذ ',
      duration: 3000,
      position: 'top'
    });
  
    
    toast.present();
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  }  
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'خطا',
      subTitle: 'يرجى ملئ  جميع الحقول ',
      buttons: ['تم']
    });
    alert.present();
  }
  order(orderName,peoNum,date , time , tableType , phone){
    if(orderName==""||peoNum==""||date==""||time==""||tableType=="" ||phone==""){
      this.showAlert();
       }else{

    this.gpsListRef.push(
      {
      orderName:orderName,
      peoNum:peoNum
      ,date:date,
      time:time,
      tableType:tableType,
      phone:phone
      
      });
    this.presentToast();
    }
  }
  
}
