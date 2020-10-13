import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.css']
})
export class BookServiceComponent implements OnInit {
  minDate: Date;
  timeLength: any = ['60 mins', '90 mins','120 mins'];
  typeOfMassage: any = ['Relaxation','Deep Tisue','Sports','Sleep','Pregnanacy','Senior','Therapeutic'];
  therapistGenderPreference: any =['Male Only','Female Only','Perfer Male Only','Perfer Female only','No Preference'];
  location: any =['At Home','At Work','Other']; 


  sr = this.fb.group({
    date: ['',Validators.required],
    timeRange:this.fb.group({
      startTime: [''],
      endTime:['']
    }),
    timeLength : [''],
    typeOfMassage:[''],
    therapistGenderPreference:[''],
    textarea:['',Validators.required],
    address: this.fb.group({
      city: [''],
      state: [''],
      zipcode: ['']
    }),
    location:['']
  });

  constructor(private fb :FormBuilder, public router:Router) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
   }

  onSubmit() {
    // console.log(this.sr.value);
  }
  ngOnInit(): void {
  }
  
  onCancel(){
    this.router.navigate(['../pf']);
  }
}
