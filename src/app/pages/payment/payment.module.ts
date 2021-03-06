import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    PaymentComponent,
    ResumeComponent
  ],
  imports: [CommonModule, PaymentRoutingModule],
  bootstrap: [PaymentComponent]
})
export class PaymentModule {}
