import { ModuleWithProviders }  from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AuthenticationComponent } from './components/authentication/login/authentication.component';
import { SignupComponent } from './components/authentication/signup/signup.component';


export const routes: Routes = [
  { path: 'login', component: AuthenticationComponent },
  { path: 'signup', component: SignupComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);