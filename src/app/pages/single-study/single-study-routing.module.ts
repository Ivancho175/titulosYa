import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleStudyComponent } from './single-study.component';

const routes: Routes = [{
  path: '',
  component: SingleStudyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleStudyRoutingModule { }
