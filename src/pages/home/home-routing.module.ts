import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { IdRequestComponent } from '../childs/home/id-request/id-request.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path : 'id-request',
    component : IdRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
