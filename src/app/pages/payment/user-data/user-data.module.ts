import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDataRoutingModule } from './user-data-routing.module';
import { UserDataComponent } from './user-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserDataComponent],
  imports: [
    CommonModule,
    UserDataRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserDataModule { }
