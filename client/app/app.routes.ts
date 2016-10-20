import { ModuleWithProviders }  from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/home/welcome/overview/overview.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'overview', component: OverviewComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);