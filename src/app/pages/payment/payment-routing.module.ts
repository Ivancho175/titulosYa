import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';

const routes: Routes = [{
  path: '',
  component: PaymentComponent,
  children: [
    {
      path: '',
      redirectTo: 'userData',
      pathMatch: 'full',
    },
    {
      path: 'userData',
      loadChildren: () => import('src/app/pages/payment/user-data/user-data.module').then(m => m.UserDataModule)
    },
    {
      path: 'checkOut',
      loadChildren: () => import('src/app/pages/payment/check-out/check-out.module').then(m => m.CheckOutModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
