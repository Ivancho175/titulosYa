import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'singleStudy',
    loadChildren: () => import('./pages/single-study/single-study.module').then(m => m.SingleStudyModule)
  },
  {
    path: 'logged',
    loadChildren: () => import('./pages/logged/logged.module').then(m => m.LoggedModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./pages/success/success.module').then(m => m.SuccessModule)
  },
  {
    path: 'fail',
    loadChildren: () => import('./pages/fail/fail.module').then(m => m.FailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
