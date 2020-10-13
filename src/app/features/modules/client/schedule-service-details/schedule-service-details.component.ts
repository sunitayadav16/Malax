import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalsComponent } from 'src/app/features/modals/modals.component';

@Component({
  selector: 'app-schedule-service-details',
  templateUrl: './schedule-service-details.component.html',
  styleUrls: ['./schedule-service-details.component.css']
})
export class ScheduleServiceDetailsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  cancelService(){
    this.dialog.open(ModalsComponent);
  }
}
