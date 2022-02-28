import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/@shared/models/user';

// Service
import { UsersService } from 'src/app/@shared/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public clickSubmit: boolean = false;
  public natural: boolean = true;
  public profileForm: FormGroup;
  public users: User[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService

  ) {
    this.profileForm = this.formBuilder.group({
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
      ])
    })
  }

  async ngOnInit() {
    window.scroll(0,0);
    const p = await this.usersService.get();
    this.users = await p.fakeUsers || [];
  }

  editProfileForm(registerForm:FormGroup) {
    if(registerForm.valid){
      this.clickSubmit = true;
      location.reload();
      window.scroll(0,0);
      console.log(registerForm.value)
    } else{
      console.log('Debe llenar todo el formulario')
    }
  }

}
