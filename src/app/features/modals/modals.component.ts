import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  public modalData: any;
  public a=2;
  constructor(public dialogref: MatDialogRef<ModalsComponent>,@Inject(MAT_DIALOG_DATA) public data: any ) {
    console.log(this.data);
    this.modalData = data['List'];
   }
  ngOnInit(): void {
  }

}
