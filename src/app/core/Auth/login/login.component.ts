import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginData = {'email':'mohit@gmail.com','password':'mohit'};

  constructor(private fb:FormBuilder, private router: Router) { }
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'email' : new FormControl(null,[Validators.required]),
      'password' : new FormControl(null,[Validators.required])
    })
  }
  onSubmit(){

    this.router.navigate(["/therapist/dashboard"]);

   const email = this.loginForm.value.email;
   const password = this.loginForm.value.password;
   if(email === this.loginData.email)
   {
     if(password === this.loginData.password)
     {
      //  console.log('done');
       
     }
     else
     {
       console.log('passwrd error');
       
     }
   }
   else{
     console.log('email error');
     
   }
   
   
  }

  

}
