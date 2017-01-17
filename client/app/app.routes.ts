import { ModuleWithProviders }  from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { newEventComponent } from './components/eventList/newEvent/newEvent.component';
import { eventListComponent } from './components/eventList/eventList.component';
import { dashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthGuard} from './auth.guard';
import { MapComponent } from './components/map/map.component';

export const routes: Routes = [
 // { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
   { path: '', component: WelcomeComponent },
    { path: 'welcome', component: WelcomeComponent },
   { path: 'overview', component: OverviewComponent },
  { path: 'newEvent', component: newEventComponent, canActivate: [AuthGuard]},
  { path: 'eventList', component: eventListComponent, canActivate: [AuthGuard]},
  { path: 'dashboard', component: dashboardComponent},
  { path:'profile', component:ProfileComponent, canActivate: [AuthGuard]},
  { path: 'map', component: MapComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);