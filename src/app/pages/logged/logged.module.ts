import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { LoggedComponent } from './logged.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CreditsComponent } from './credits/credits.component';



@NgModule({
  declarations: [
    SidenavComponent,
    LoggedComponent,
    CreditsComponent
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule,
  ],
  bootstrap: [LoggedComponent]
})
export class LoggedModule { }
