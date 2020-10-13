import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AuthComponent } from './Auth/auth.component'; 


@NgModule({
    declarations:[
        LoginComponent,
        SignupComponent,
        AuthComponent
    ],
    imports:[
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule        
    ],
    exports:[
        
    ]
})

export class CoreModule {

}