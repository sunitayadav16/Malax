import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


export interface PeriodicElement {
  id: number;
  time: string;
  date: string;
  location: string;
  client: string;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {'id':1,'date':'Sep-20-2020','time':'10:00 AM','location':'11th Ave S, Billings,MT 59106','client':'John Warner','status':'Requested'},
  {'id':2,'date':'Sep-13-2020','time':'11:00 AM','location':'26th St W, Billings,MT 59103','client':'David Smith','status':'Scheduled'},
  {'id':3,'date':'Aug-26-2020','time':'02:00 PM','location':'68th St W, Billings,MT 59107','client':'John Carter','status':'In-progress'},
  {'id':4,'date':'Aug-12-2020','time':'06:00 PM','location':'Antelope Trail, Billings,MT 59107','client':'Lopez Tylor','status':'Completed'},
  {'id':5,'date':'Jul-20-2020','time':'08:00 AM','location':'Chancery Ln, Billings,MT 59107','client':'Will Smith','status':'Completed'},
  {'id':6,'date':'Sep-20-2020','time':'10:00 AM','location':'11th Ave S, Billings,MT 59106','client':'John Warner','status':'Requested'},
  {'id':7,'date':'Sep-13-2020','time':'11:00 AM','location':'26th St W, Billings,MT 59103','client':'David Smith','status':'Scheduled'},
  {'id':8,'date':'Aug-26-2020','time':'02:00 PM','location':'68th St W, Billings,MT 59107','client':'John Carter','status':'In-progress'},
  {'id':9,'date':'Aug-12-2020','time':'06:00 PM','location':'Antelope Trail, Billings,MT 59107','client':'Lopez Tylor','status':'Completed'},
  {'id':10,'date':'Jul-20-2020','time':'08:00 AM','location':'Chancery Ln, Billings,MT 59107','client':'Will Smith','status':'Completed'},
];
@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['id','time','date','location','client','status','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
