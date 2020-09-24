import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch: 'full'},
  {path:'auth',loadChildren: () => import('../app/core/core.module').then(m => m.CoreModule)},
  // {path:'signup', component: SignupComponent},
  // {path:'therapist',component: TherapistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
