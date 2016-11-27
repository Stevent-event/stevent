import { ModuleWithProviders }  from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { OverviewComponent } from './components/home/welcome/overview/overview.component';
import { PasswordChangeComponent} from './components/authentication/passwordchange/passwordchange.component';
import { myPageComponent } from './components/myPage/myPage.component';
import { newEventComponent } from './components/eventList/newEvent/newEvent.component';
import { eventListComponent } from './components/eventList/eventList.component';
import { AuthGuardComponent } from './components/authentication/AuthGuard/AuthGuard.component';
import { dashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'overview', component: OverviewComponent},
  { path: 'passwordchange', component: PasswordChangeComponent},
  { path: 'myPage', component: myPageComponent, canActivate: [AuthGuardComponent]},
  { path: 'newEvent', component: newEventComponent, canActivate: [AuthGuardComponent]},
  { path: 'eventList', component: eventListComponent, canActivate: [AuthGuardComponent]},
  { path: 'dashboard', component: dashboardComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);