import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClientComponent } from './features/modules/client/client.component';
import { TherapistComponent } from './features/modules/therapist/therapist.component';
import { AdminComponent } from './features/modules/admin/admin.component';
import { HeaderComponent } from './shared/header/header.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
   
    ClientComponent,
    TherapistComponent,
    AdminComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
