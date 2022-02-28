import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

// Services
import { UsersService } from 'src/app/@shared/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public clickSubmit: boolean = false;
  public natural: boolean = true;
  public registerForm: FormGroup;
  public paramsId: any = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.minLength(4),
        Validators.required
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
      documentType: new FormControl('', [
      ]),
      corp: new FormControl('', [
      ]),
      docNumber: new FormControl('', [
        Validators.min(10000000),
        Validators.max(9999999999),
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      role: new FormControl('user'),
      check1: new FormControl('', [
        Validators.requiredTrue
      ]),
      check2: new FormControl('', [
        Validators.requiredTrue
      ])
    })

  }

  ngOnInit(): void {
    window.scroll(0,0);
  }

  /* onRegister() {
    this.usersService.onRegister()
  } */

  async sendForm(registerForm:FormGroup) {
    const id = this.route.params.subscribe( async (params: Params) => {
      this.paramsId = params.id;
    })
    if (registerForm.valid) {
      await this.usersService.onRegister(registerForm.value.email, registerForm.value.password)
      const user = registerForm.value;
      const userId =  this.paramsId || null;
      this.clickSubmit = true;
      await this.usersService.onSaveUser(user, userId)
      registerForm.reset();
      this.router.navigate(['logged']);
      console.log(registerForm.value)
    } else{
      console.log('Debe llenar todo el formulario')
    }
  }

}
