import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { ScheduleServicesComponent } from './schedule-services/schedule-services.component';
import { ScheduleServicesDetailComponent } from './schedule-services-detail/schedule-services-detail.component';
import { TherapistRoutingModule } from './therapist-routing.module';
import { HeaderComponent } from '../../../shared/header/header.component';
import { TherapistComponent } from './therapist.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import {CdkTableModule} from '@angular/cdk/table';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

import {MatDialogModule} from '@angular/material/dialog';
import { UpdateEmailComponent } from './modals/update-email/update-email.component';
import { UpdatePhoneComponent } from './modals/update-phone/update-phone.component';
import { UpdateCurrentPhotoComponent } from './modals/update-current-photo/update-current-photo.component';
import { UpdateConsentFormComponent } from './modals/update-consent-form/update-consent-form.component';
import { UpdateIdPhotoComponent } from './modals/update-id-photo/update-id-photo.component';
import { TherapistAgreementFormComponent } from './modals/therapist-agreement-form/therapist-agreement-form.component';
import { UpdatePaymentComponent } from './modals/update-payment/update-payment.component';


@NgModule({
    declarations:[
     DashboardComponent,
     AddProfileComponent,
     ScheduleServicesComponent,
     ScheduleServicesDetailComponent,
     HeaderComponent,
     TherapistComponent,
     UpdateEmailComponent,
     UpdatePhoneComponent,
     UpdateCurrentPhotoComponent,
     UpdateConsentFormComponent,
     UpdateIdPhotoComponent,
     TherapistAgreementFormComponent,
     UpdatePaymentComponent

    ],
    imports:[
        NgbModule,
        RouterModule,
        CommonModule,
        TherapistRoutingModule,
        MatCardModule,
        MatToolbarModule,
        CdkTableModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatDialogModule
    ],
    exports:[
       
    ]
})

export class TherapistModule{

}
