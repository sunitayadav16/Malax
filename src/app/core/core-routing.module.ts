import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../core/Auth/login/login.component';
import { SignupComponent } from '../core/Auth/signup/signup.component';
import { AuthComponent } from './Auth/auth.component';


const routes: Routes = [
  {path:'',component:AuthComponent , children:[
    {path:'login' ,component: LoginComponent},
    {path:'signup', component: SignupComponent}
  ]},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
