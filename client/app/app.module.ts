import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AuthenticationComponent} from './components/authentication/login/authentication.component';
import {SignupComponent} from './components/authentication/signup/signup.component'
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, HomeComponent,AuthenticationComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
