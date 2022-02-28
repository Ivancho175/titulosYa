import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedComponent } from './logged.component';

const routes : Routes = [{
    path: '',
    component: LoggedComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        loadChildren: () => import('src/app/pages/logged/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'history',
        loadChildren: () => import('src/app/pages/logged/history/history.module').then(m => m.HistoryModule)
      },
      {
        path: 'studies',
        loadChildren: () => import('src/app/pages/logged/studies/studies.module').then(m => m.StudiesModule)
      },
      {
        path: 'byRegistration',
        loadChildren: () => import('src/app/pages/logged/by-registration/by-registration.module').then(m => m.ByRegistrationModule)
      }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoggedRoutingModule { }
