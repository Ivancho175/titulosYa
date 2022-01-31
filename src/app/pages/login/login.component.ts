import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailField: FormControl;
  passwordField: FormControl;

  constructor() {
    this.emailField = new FormControl('', [
      Validators.email,
      Validators.required
    ]);
    this.emailField.valueChanges.subscribe(value => {
    });
    this.passwordField = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
  }

  ngOnInit(): void {
  }

  login() {
    if(this.emailField.valid && this.passwordField.valid) {
      console.log(this.emailField.value, this.passwordField.value);
    }
  }

}
