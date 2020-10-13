import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ConsentFormComponent } from '../modals/consent-form/consent-form.component';
import { MalaxFormComponent } from '../modals/malax-form/malax-form.component';
import { UpdateEmailComponent } from '../modals/update-email/update-email.component';
import { UpdateIdPhotoComponent } from '../modals/update-id-photo/update-id-photo.component';
import { UpdatePhoneComponent } from '../modals/update-phone/update-phone.component';
import { UpdatePhotoComponent } from '../modals/update-photo/update-photo.component';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {

  }

  onProfile(){
      // this.router.navigate(['../cpp']);   
  }

  updateEmail() {
    //  this.dialog.open(DialogBoxComponent,{ data:'test'});
    let json = [{
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 2,
      "id": 2,
      "title": "delectus aut autem",
      "completed": false
    }];

    let data = {
      "Title":"ABC",   
       List: json
    };
    // this.dialog.open(ModalsComponent, {data : data});
    this.dialog.open(UpdateEmailComponent, {data : 'Testing'})
  }

  updatePhone(){
    
    this.dialog.open(UpdatePhoneComponent);
  }

  updatePhoto(){
   this.dialog.open(UpdatePhotoComponent);
  }

  updateIdPhoto(){
   this.dialog.open(UpdateIdPhotoComponent);
  }

  consentForm(){
   this.dialog.open(ConsentFormComponent);
  }

  malaxAgreementForm(){
   this.dialog.open(MalaxFormComponent);
  }

}

