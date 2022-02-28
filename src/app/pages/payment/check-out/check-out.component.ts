import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  public clickSubmit: boolean = false;
  public CheckOutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
    ) {
      this.CheckOutForm = this.formBuilder.group({
        cardNumber: new FormControl('', [
          Validators.minLength(10),
          Validators.required
        ]),
        expDate: new FormControl('', [
          Validators.required
        ]),
        cvv: new FormControl('', [
          Validators.minLength(3),
          Validators.maxLength(3),
          Validators.required
        ]),
        cuotes: new FormControl('', [
          Validators.required
        ]),
        coupon: new FormControl('', [
          Validators.minLength(8)
        ])
      })
    }

  ngOnInit(): void {
  }

  sendForm(CheckOutForm:FormGroup) {
    if(CheckOutForm.valid){
      this.clickSubmit = true;
      console.log(CheckOutForm.value)
    } else{
      console.log('Debe llenar todo el formulario')
    }
  }

}
