import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    RouterLink,

    RouterLink,

    ReactiveFormsModule,
    NgIf,

  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {



constructor(private router:Router){}

loginForm :FormGroup = new FormGroup({
email: new FormControl (null,[Validators.required,Validators.email]),
password : new FormControl(null ,[Validators.required,Validators.pattern(/^[A-Z]/)])
});


submitLogin(loginForm:FormGroup){
  console.log(loginForm);

   if (this.loginForm.valid) {
  localStorage.setItem('email', JSON.stringify(this.loginForm.get('email')?.value));
  localStorage.setItem('password',  JSON.stringify(this.loginForm.get('password')?.value));

  this.router.navigate(['/home']);
  console.log(loginForm.value);

}
}
}
