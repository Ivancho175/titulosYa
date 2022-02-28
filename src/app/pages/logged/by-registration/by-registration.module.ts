import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByRegistrationRoutingModule } from './by-registration-routing.module';
import { ByRegistrationComponent } from './by-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ByRegistrationComponent
  ],
  imports: [
    CommonModule,
    ByRegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ByRegistrationModule { }
