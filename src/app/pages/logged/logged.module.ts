import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoggedRoutingModule } from './logged-routing.module';
import { LoggedComponent } from './logged.component';
import { SharedModule } from 'src/app/pages/logged/@shared/shared.module';



@NgModule({
  declarations: [
    LoggedComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    LoggedRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  bootstrap: [LoggedComponent]
})
export class LoggedModule { }
