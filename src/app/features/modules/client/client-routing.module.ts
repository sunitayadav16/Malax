import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddClientComponent } from './add-client/add-client.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { BookServiceComponent } from './add-service/book-service/book-service.component';
import { PaymentDetailsComponent } from './add-service/payment-details/payment-details.component';
import { ClientComponent } from './client.component';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleServiceDetailsComponent } from './schedule-service-details/schedule-service-details.component';
import { ServicesListComponent } from './services-list/services-list.component';


const routes: Routes = [
  {path:'', component: ClientComponent, children:[
    { path:'pf', component: AddClientComponent, resolve:[]},
    { path:'sl', component: ServicesListComponent},
    { path:'cp', component: ProfileComponent},
    { path:'sr', component: AddServiceComponent,children :[
      { path:'',component:BookServiceComponent},
      { path:'pay',component:PaymentDetailsComponent}
    ]},
    { path :'sd',component: ScheduleServiceDetailsComponent}
  ]}  
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientRoutingModule { }