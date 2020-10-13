import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  gender:any =['Male','Female'];

  firstForm = this.fb.group({
    firstname: ['',Validators.required,Validators.maxLength(8)],
    lastname : ['',Validators.required,Validators.maxLength(8)],
    gender:[''],
    birthdate :['',Validators.required], 
  });
  
  constructor(private fb:FormBuilder) {}
  
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.firstForm.value);
  }
}
