import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientRoutingModule} from './client-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { ClientComponent } from './client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ScheduleServiceDetailsComponent } from './schedule-service-details/schedule-service-details.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { HeaderComponent } from '../../../shared/header/header.component';
import { ClientService } from './client.service';
import { BookServiceComponent } from './add-service/book-service/book-service.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ModalsComponent } from '../../modals/modals.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateEmailComponent } from './modals/update-email/update-email.component';
import { UpdatePhoneComponent } from './modals/update-phone/update-phone.component';
import { UpdatePhotoComponent } from './modals/update-photo/update-photo.component';
import { UpdateIdPhotoComponent } from './modals/update-id-photo/update-id-photo.component';
import { ConsentFormComponent } from './modals/consent-form/consent-form.component';
import { MalaxFormComponent } from './modals/malax-form/malax-form.component';
import { VerifyNumberComponent } from './modals/verify-number/verify-number.component';

@NgModule({
     declarations:[
        ClientComponent,ModalsComponent,
        AddClientComponent,
        ScheduleServiceDetailsComponent,
        AddServiceComponent,
        HeaderComponent,
        BookServiceComponent,
        ServicesListComponent,
        ProfileComponent,
        UpdateEmailComponent,
        UpdatePhoneComponent,
        UpdatePhotoComponent,
        UpdateIdPhotoComponent,
        ConsentFormComponent,
        MalaxFormComponent,
        VerifyNumberComponent
     ],
     imports:[
        RouterModule,
        CommonModule,     
        FormsModule,
        ReactiveFormsModule,
        ClientRoutingModule,
        MatTabsModule, MatStepperModule,
        MatPaginatorModule, MatTableModule, MatInputModule, MatDatepickerModule,
        MatToolbarModule,MatButtonModule,MatCardModule,MatDialogModule, MatButtonToggleModule,
      ],
     exports:[],
    providers: [ClientService]
})
export class ClientModule{

}