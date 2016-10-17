import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationComponent } from './components/authentication/login/authentication.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
@Component({
  selector: 'my-app',
  template: '<home></home>'
})

export class AppComponent { }
