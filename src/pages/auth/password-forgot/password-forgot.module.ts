import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordForgotPageRoutingModule } from './password-forgot-routing.module';

import { PasswordForgotPage } from './password-forgot.page';
import { HeaderComponent } from '../../../shared/components/header/header.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordForgotPageRoutingModule
  ],
  declarations: [PasswordForgotPage, HeaderComponent]
})
export class PasswordForgotPageModule {}
