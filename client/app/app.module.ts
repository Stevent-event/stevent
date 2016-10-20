import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './components/home/welcome/welcome.component';

import {LoginComponent} from './components/authentication/login/login.component';
import {SignupComponent} from './components/authentication/signup/signup.component';
import {routing} from './app.routes';
import {AuthenticationService} from './authentication.service'

@NgModule({
<<<<<<< HEAD
  imports:      [ BrowserModule ],
  declarations: [AppComponent, WelcomeComponent],
=======
  imports:      [ BrowserModule, routing ],
  declarations: [
    AppComponent, 
    HomeComponent,
    LoginComponent,
    SignupComponent],
>>>>>>> a0172d17bde62cf581341f73be37dfea125470eb
  bootstrap: [AppComponent]

})
export class AppModule { }
