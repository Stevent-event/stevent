import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms"; // for model-driven forms
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/home/welcome/overview/overview.component';
import { routing } from './app.routes';
import { AuthenticationService } from './authentication.service';
import { SignupService } from './signup.service';


@NgModule({ 
  imports: [ BrowserModule, routing, ReactiveFormsModule, FormsModule ],

  declarations: [ 
    AppComponent, 
    HomeComponent, 
    WelcomeComponent,
    LoginComponent, 
    SignupComponent,
    OverviewComponent
     ],
  bootstrap: [AppComponent]


})

export class AppModule { }
