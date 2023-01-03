import { LoginPage } from './pages/login/login.page';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { StorageService } from 'src/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'ContactList', url:'/folder/:id' },
    { title: 'Notes', url: '/notes'},
    // { title: 'ContactList', url: '/contactslist', icon: 'heart' },
    { title: 'Gallery', url: '/gallery'},
    { title: 'Logout', url: '/logout'}
  ];

  public authUser: any;
  showBtnLogin = true;
  // showBtnLogout: boolean = true;
 currentUser: any;

  constructor(
    private platform: Platform,private statusBar: StatusBar,public router:Router,
    public authService : AuthenticationService, public storageService: StorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.router.navigateByUrl('splash');
    });
  }

}