import { NgModule } from '@angular/core';
/*Angular core modules*/ 
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
/*Components*/ 
import { LoginComponent } from './core/Auth/login/login.component';
import { SignupComponent } from './core/Auth/signup/signup.component';

=======
import { LoginComponent } from './core/Auth/login/login.component';
import { SignupComponent } from './core/Auth/signup/signup.component';
>>>>>>> sunita-yadav


const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch: 'full'},
<<<<<<< HEAD
  {path:'signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'therapist',loadChildren: () => import('../app/features/modules/therapist/therapist.module').then(m => m.TherapistModule)}, 
=======
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'client', loadChildren: () => import('../app/features/modules/client/client.module').then(x=> x.ClientModule)} 
>>>>>>> sunita-yadav
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
