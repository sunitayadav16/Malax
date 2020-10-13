import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { Signup } from './signup.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  allowOtherOption = false;
  submitted = false;
  allowClientModule = false;
  allowTherapistModule = false;
  
  constructor(private fb:FormBuilder) { }
  signup: Signup[] = [];
  
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      'email' : new FormControl(null,[Validators.required,Validators.email,Validators.maxLength(30)]),
      'password' : new FormControl(null,[Validators.required,
        Validators.minLength(6)]),
      'confirmPassword' : new FormControl(null,Validators.required),
      'firstName' : new FormControl(null,[Validators.required,
              Validators.minLength(3),
              Validators.maxLength(30)]),
      'lastName' : new FormControl(null,[Validators.required,
              Validators.minLength(3),
              Validators.maxLength(30)]),
      'market' : new FormControl(null,Validators.required),
      'zipcode' : new FormControl(null, Validators.required)
    },
    {
      validator: ConfirmPasswordValidator("password", "confirmPassword")
    })
  }
  onSubmit(){
        console.log(this.signupForm.valid);
        console.log('value'+this.signupForm.value);
        const email = this.signupForm.value.email;
        const password = this.signupForm.value.password;
        const firstName = this.signupForm.value.firstName;
        const lastName = this.signupForm.value.lastName; 
        const market = this.signupForm.value.market;

        const data = new Signup(email,password,firstName,lastName,market);

        this.signup.push(data);
        console.log(this.signup);
        
  }

  onChange(val){
    if(val === 'Billings,MT')
    {
      this.allowOtherOption = false;
    }else{
      this.allowOtherOption = true;
    }
  }

onChangeModule(val){
  console.log('done='+val);
  if(val === 'client')
  {
    this.allowClientModule = !this.allowClientModule;
    this.allowTherapistModule = false;
  }
  else if(val === 'therapist')
  {
    this.allowTherapistModule = !this.allowTherapistModule;
    this.allowClientModule = false;
  }
  
}

}
