import { NgModule } from '@angular/core';
/*Angular core modules*/ 
import { Routes, RouterModule } from '@angular/router';
/*Components*/ 
import { LoginComponent } from './core/Auth/login/login.component';
import { SignupComponent } from './core/Auth/signup/signup.component';



const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch: 'full'},
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'therapist',loadChildren: () => import('../app/features/modules/therapist/therapist.module').then(m => m.TherapistModule)}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
