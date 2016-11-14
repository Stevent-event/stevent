import { ModuleWithProviders }  from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { OverviewComponent } from './components/home/welcome/overview/overview.component';
import { PasswordChangeComponent} from './components/authentication/passwordchange/passwordchange.component';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'overview', component: OverviewComponent},
  { path: 'passwordchange', component: PasswordChangeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);