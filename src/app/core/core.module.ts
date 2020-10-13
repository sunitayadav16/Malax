import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AuthComponent } from './Auth/auth.component'; 
=======
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AuthComponent } from '../core/Auth/auth.component';
>>>>>>> sunita-yadav


@NgModule({
    declarations:[
        LoginComponent,
        SignupComponent,
        AuthComponent
    ],
    imports:[
        RouterModule,
        CommonModule,
<<<<<<< HEAD
        FormsModule,
        ReactiveFormsModule        
=======
        ReactiveFormsModule,
        
>>>>>>> sunita-yadav
    ],
    exports:[
        
    ]
})

export class CoreModule {

}