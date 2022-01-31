import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleStudyRoutingModule } from './single-study-routing.module';
import { SingleStudyComponent } from './single-study.component';



@NgModule({
  declarations: [SingleStudyComponent],
  imports: [
    CommonModule,
    SingleStudyRoutingModule
  ]
})
export class SingleStudyModule { }
