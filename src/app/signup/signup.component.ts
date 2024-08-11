import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,

    NgIf,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {


  constructor(){}
  registerForm: FormGroup<any> = new FormGroup(
    {first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
    last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
        age:new FormControl(null,[Validators.required,Validators.min(18),Validators.maxLength(90)]),
          password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z]/)]),
          ccExpiration:new FormControl(null,[Validators.required,Validators.min(16),Validators.maxLength(16)]),
          ccCvv:new FormControl(null,[Validators.required,Validators.min(3),Validators.maxLength(3)]),


          });
        // }
submitRegisterForm(registerForm:FormGroup){
console.log(registerForm.value);
localStorage.setItem('userValue',JSON.stringify(this.registerForm.value))



}

}
