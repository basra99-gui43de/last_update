import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MapPage } from '../pages/map/map'
import { TableOrderPage } from '../pages/table-order/table-order';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicStorageModule } from '@ionic/storage';

import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { MenuPage } from '../pages/menu/menu';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CartPage } from '../pages/cart/cart';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { SearchPage } from '../pages/search/search';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ResturantSearchPage } from '../pages/resturant-search/resturant-search';
import { ResturantDetailsPage } from '../pages/resturant-details/resturant-details';
import { EatingSearchPage } from '../pages/eating-search/eating-search';
import { Geolocation } from '@ionic-native/geolocation';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    LoginPage,
    MenuPage,
    CartPage,
    UserProfilePage,
    SearchPage,
    EditProfilePage,
    ResturantSearchPage,
   ResturantDetailsPage,
   EatingSearchPage,
   MapPage,
   TableOrderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(
      MyApp, {
        backButtonText: 'رجوع'
      },
    ),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    Ng2SearchPipeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RegisterPage,
    LoginPage,
    MenuPage,
    CartPage,
    UserProfilePage,
    SearchPage,
    EditProfilePage,
    ResturantSearchPage,
   ResturantDetailsPage,
   EatingSearchPage,
   MapPage,
   TableOrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthServiceProvider,
    BarcodeScanner,
    Geolocation
  ]
})
export class AppModule {}
