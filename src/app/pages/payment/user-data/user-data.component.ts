import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  public clickSubmit: boolean = false;
  public natural: boolean = true;
  public UserDataForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.UserDataForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.minLength(4),
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      documentType: new FormControl('', [
        // Validators.requiredTrue
      ]),
      corp: new FormControl('', [
        Validators.minLength(4)
      ]),
      docNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }

  ngOnInit(): void {
  }

  sendForm(UserDataForm:FormGroup) {
    if(UserDataForm.valid){
      this.clickSubmit = true;
      console.log(UserDataForm.value)
    } else{
      console.log('Debe llenar todo el formulario')
    }
  }

}
