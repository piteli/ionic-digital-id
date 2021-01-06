import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyEIdPageRoutingModule } from './my-e-id-routing.module';

import { MyEIdPage } from './my-e-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyEIdPageRoutingModule
  ],
  declarations: [MyEIdPage]
})
export class MyEIdPageModule {}
