import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ClientComponent } from './features/modules/client/client.component';
import { TherapistComponent } from './features/modules/therapist/therapist.component';
import { AdminComponent } from './features/modules/admin/admin.component';
import { HeaderComponent } from './shared/header/header.component';


import {featureModule} from './features/feature.module';
import {CoreModule} from './core/core.module';


=======
>>>>>>> mohit-dhiman

import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
