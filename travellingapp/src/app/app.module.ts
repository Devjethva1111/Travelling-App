import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { ContactlistService } from './services/contactlist.service';

import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { MyModalPage } from './my-modal/my-modal.page';
import { Moment } from 'moment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot(),HttpClientModule],
  providers: [ AuthenticationService,StatusBar,Camera,ContactlistService,MyModalPage,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
