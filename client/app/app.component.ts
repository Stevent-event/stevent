import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent} from './components/home/welcome/overview/overview.component';
import { AuthenticationComponent } from './components/authentication/login/authentication.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';

@Component({
  selector: 'my-app',
  template: '<home></home>'
})

export class AppComponent { }
