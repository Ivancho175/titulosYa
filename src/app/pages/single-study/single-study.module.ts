import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleStudyRoutingModule } from './single-study-routing.module';
import { SingleStudyComponent } from './single-study.component';

// Dropzone
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [SingleStudyComponent],
  imports: [
    CommonModule,
    SingleStudyRoutingModule,
    NgxDropzoneModule
  ]
})
export class SingleStudyModule { }
