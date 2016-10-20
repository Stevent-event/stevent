import { ModuleWithProviders }  from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { WelcomeComponent } from './components/home/welcome/welcome.component';
=======
import { OverviewComponent } from './components/home/welcome/overview/overview.component';
>>>>>>> bca9af3ce347d66bf2b77cf001c651b65d809426

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
<<<<<<< HEAD
  { path: 'welcome', component: WelcomeComponent}
=======
  { path: 'overview', component: OverviewComponent}
>>>>>>> bca9af3ce347d66bf2b77cf001c651b65d809426
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);