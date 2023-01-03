import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MyModalPageRoutingModule } from './my-modal-routing.module';

import { MyModalPage } from './my-modal.page';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MyModalPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MyModalPage]
})
export class MyModalPageModule {}
