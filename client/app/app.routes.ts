import { ModuleWithProviders }  from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AuthenticationComponent } from './components/authentication/login/authentication.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: AuthenticationComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);