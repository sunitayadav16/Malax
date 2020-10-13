import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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
        
    ],
    exports:[
        LoginComponent,
        SignupComponent,
    ]
})
export class CoreModule {

}