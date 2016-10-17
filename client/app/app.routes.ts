import { ModuleWithProviders }  from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);