import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';



const routes: Routes = [
  {path:"",redirectTo:"users",pathMatch:"full"},
  {path:"aboutus",component:AboutusComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"singup",component:SingupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
