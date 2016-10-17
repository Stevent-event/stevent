import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';

import {LoginComponent} from './components/authentication/login/login.component';
import {SignupComponent} from './components/authentication/signup/signup.component';
<<<<<<< HEAD
import {routing} from './app.routes';
import {AuthenticationService} from './authentication.service'
=======
import { routing } from './app.routes';

>>>>>>> 661fe30859b806b028cff3359c21955847eda8d7
@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [
    AppComponent, 
    HomeComponent,
    LoginComponent,
    SignupComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
