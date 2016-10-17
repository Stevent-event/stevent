import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent} from './components/home/welcome/overview/overview.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import {PrivateComponent} from './components/private.component';
@Component({
  selector: 'my-app',
  template: '<home>Home</home>'
})

export class AppComponent { }
