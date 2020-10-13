import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD

=======
>>>>>>> sunita-yadav
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { ClientComponent } from './features/modules/client/client.component';
import { TherapistComponent } from './features/modules/therapist/therapist.component';
import { AdminComponent } from './features/modules/admin/admin.component';
import { HeaderComponent } from './shared/header/header.component';


import {featureModule} from './features/feature.module';
import {CoreModule} from './core/core.module';


=======
>>>>>>> mohit-dhiman
=======
import { TherapistComponent } from './features/modules/therapist/therapist.component';
import { AdminComponent } from './features/modules/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> sunita-yadav

import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    TherapistComponent,
    AdminComponent,
>>>>>>> sunita-yadav
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
<<<<<<< HEAD
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports:[
=======
    FormsModule,
    ReactiveFormsModule,
>>>>>>> sunita-yadav
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
