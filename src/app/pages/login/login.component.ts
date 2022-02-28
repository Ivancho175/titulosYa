import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/@shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private usersService: UsersService
  ) {
    this.loginForm = this.formbuilder.group({
      email: new FormControl('', [
        Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/),
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }

  ngOnInit(): void {
    window.scroll(0,0);
  }

  login(loginForm: FormGroup) {
    if(loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.usersService.onLogin(email, password);
      console.log(loginForm);
    }
  }

}
