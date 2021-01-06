import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('../pages/auth/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'password-forgot',
    loadChildren: () => import('../pages/auth/password-forgot/password-forgot.module').then( m => m.PasswordForgotPageModule)
  },
  {
    path: 'password-change',
    loadChildren: () => import('../pages/auth/password-change/password-change.module').then( m => m.PasswordChangePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
