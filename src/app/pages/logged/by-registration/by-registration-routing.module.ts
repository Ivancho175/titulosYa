import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByRegistrationComponent } from './by-registration.component';

const routes: Routes = [{
  path: '',
  component: ByRegistrationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ByRegistrationRoutingModule { }
