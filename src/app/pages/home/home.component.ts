import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public customize: boolean = false;
  public contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [
      ]),
      email: new FormControl('', [
        Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/),
        Validators.required
      ]),
      tel: new FormControl('', [
        Validators.min(1000000000),
        Validators.max(9999999999),
        Validators.required
      ]),
      description: new FormControl('', [
      ]),
      check: new FormControl('', [
        Validators.requiredTrue
      ])
    })
  }

  ngOnInit(): void {
    window.scroll(0,0);
  }

  sendForm(contactForm:FormGroup) {
    if(contactForm.valid){
      this.customize = false;
      console.log(contactForm.value)
    } else{
      console.log('Debe llenar todo el formulario')
    }
  }

}
