import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public clickSubmit: boolean = false;
  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.minLength(4),
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      checkPassword: new FormControl('', [
        Validators.required
      ]),
      tel: new FormControl('', [
        Validators.required
      ]),
      documentType: new FormControl('', [
        Validators.required
      ]),
      docNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    })

  }

  ngOnInit(): void {
  }

  sendForm(registerForm:FormGroup) {
    if(registerForm.valid){
      this.clickSubmit = true;
      console.log(registerForm.value)
    } else{
      console.log('Debe llenar todo el formulario')
    }
  }

}
