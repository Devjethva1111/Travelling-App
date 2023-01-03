import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from 'src/app/my-modal/my-modal.page';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage {
  dataReturned: any;

  data: any;

  constructor(public modalCtrl: ModalController, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: MyModalPage
    });
    return await modal.present();
  }

} 