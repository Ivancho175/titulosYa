import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from 'src/app/pages/logged/@shared/components/sidenav/sidenav.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SharedModule { }
