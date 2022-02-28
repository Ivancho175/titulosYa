import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudiesRoutingModule } from './studies-routing.module';
import { StudiesComponent } from './studies.component';



@NgModule({
  declarations: [
    StudiesComponent
  ],
  imports: [
    CommonModule,
    StudiesRoutingModule
  ]
})
export class StudiesModule { }
