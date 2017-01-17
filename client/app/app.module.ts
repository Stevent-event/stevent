import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms"; // for model-driven forms
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {ProfileComponent} from './components/profile/profile.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { routing } from './app.routes';
import { Auth } from './services/authentication.service';
import { newEventComponent } from './components/eventList/newEvent/newEvent.component';
import { eventListComponent } from './components/eventList/eventList.component';
import { dashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
// import {AuthGuard} from './auth.guard';
import {GlobalComponent} from './components/shared/global_component/global.component';
import { MapComponent } from './components/map/map.component';

@NgModule({ 
  imports: [ 
    BrowserModule, 
    routing, 
    ReactiveFormsModule, 
    FormsModule, 
    HttpModule
    ],

  declarations: [ 
    AppComponent, 
    HomeComponent, 
    newEventComponent,
    eventListComponent,
    dashboardComponent,
    ProfileComponent,
    WelcomeComponent,
    OverviewComponent,
    GlobalComponent,
    MapComponent
     ],

  providers: [Auth,AUTH_PROVIDERS],//,AuthGuard],

  bootstrap: [AppComponent]


})

export class AppModule { }
