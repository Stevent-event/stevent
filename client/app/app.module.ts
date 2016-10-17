import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AuthenticationComponent} from './components/authentication/login/authentication.component';
import {SignupComponent} from './components/authentication/signup/signup.component';
import { routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [
    AppComponent, 
    HomeComponent,
    AuthenticationComponent,
    SignupComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
