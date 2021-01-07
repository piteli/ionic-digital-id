import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { VerifyIdentityComponent } from '../childs/home/verify-identity/verify-identity.component';
import { IdRequestComponent } from '../childs/home/id-request/id-request.component';
import { ProofEligibilityComponent } from '../childs/home/proof-eligibility/proof-eligibility.component';
import { IdentityVerificationComponent } from '../childs/home/identity-verification/identity-verification.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, VerifyIdentityComponent, ProofEligibilityComponent, IdRequestComponent, IdentityVerificationComponent]
})
export class HomePageModule {}
