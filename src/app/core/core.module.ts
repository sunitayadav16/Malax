import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from '../core/core-routing.module';

import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AuthComponent } from '../core/Auth/auth.component';
@NgModule({
    declarations:[
        LoginComponent,
        SignupComponent,
        AuthComponent
    ],
    imports:[
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        CoreRoutingModule
    ],
    exports:[
        LoginComponent,
        SignupComponent,
    ]
})
export class CoreModule {

}