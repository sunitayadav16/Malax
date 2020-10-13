import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProfileComponent } from './add-profile/add-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TherapistAgreementFormComponent } from './modals/therapist-agreement-form/therapist-agreement-form.component';
import { UpdateConsentFormComponent } from './modals/update-consent-form/update-consent-form.component';
import { UpdateCurrentPhotoComponent } from './modals/update-current-photo/update-current-photo.component';
import { UpdateEmailComponent } from './modals/update-email/update-email.component';
import { UpdateIdPhotoComponent } from './modals/update-id-photo/update-id-photo.component';
import { UpdatePhoneComponent } from './modals/update-phone/update-phone.component';
import { ScheduleServicesDetailComponent } from './schedule-services-detail/schedule-services-detail.component';
import { ScheduleServicesComponent } from './schedule-services/schedule-services.component';
import { TherapistComponent } from './therapist.component';

const routes: Routes = [
       
      {path:'', component:TherapistComponent, children:[
        {path:'add-profile',component:AddProfileComponent},
        {path:'schedule-services',component:ScheduleServicesComponent},
        {path:'dashboard',component:DashboardComponent},
        {path:'ssd',component:ScheduleServicesDetailComponent},
        {path:'uemail',component:UpdateEmailComponent},
        {path:'uphone',component:UpdatePhoneComponent},
        {path:'ucphoto',component:UpdateCurrentPhotoComponent},
        {path:'uidphoto',component:UpdateIdPhotoComponent},
        {path:'uconsent',component:UpdateConsentFormComponent},
        {path:'ta',component:TherapistAgreementFormComponent},
        
      ]},
  ];
  
  @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
export class TherapistRoutingModule{

}