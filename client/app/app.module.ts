import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms"; // for model-driven forms
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/home/welcome/overview/overview.component';
import { routing } from './app.routes';
import { AuthenticationService } from './services/authentication.service';
import { SignupService } from './signup.service';
import { PasswordChangeComponent} from './components/authentication/passwordchange/passwordchange.component';
import { myPageComponent } from './components/myPage/myPage.component';
import { newEventComponent } from './components/eventList/newEvent/newEvent.component';
import { eventListComponent } from './components/eventList/eventList.component';
import { AuthGuardComponent } from './components/authentication/AuthGuard/AuthGuard.component';

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
    WelcomeComponent,
    LoginComponent, 
    SignupComponent,
    OverviewComponent,
    PasswordChangeComponent,
    myPageComponent,
    newEventComponent,
    eventListComponent,
    AuthGuardComponent
     ],

  providers: [AuthenticationService],

  bootstrap: [AppComponent]


})

export class AppModule { }
