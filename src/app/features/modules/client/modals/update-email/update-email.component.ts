import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrls: ['./update-email.component.css']
})
export class UpdateEmailComponent implements OnInit {

  constructor(public dialogref: MatDialogRef<UpdateEmailComponent>,@Inject(MAT_DIALOG_DATA) public data: any ) {
    console.log(this.data);
   }

  ngOnInit(): void {
  }

}
