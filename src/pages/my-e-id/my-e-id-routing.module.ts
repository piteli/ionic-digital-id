import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyEIdPage } from './my-e-id.page';

const routes: Routes = [
  {
    path: '',
    component: MyEIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyEIdPageRoutingModule {}
