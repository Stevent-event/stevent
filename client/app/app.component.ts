import { Component } from '@angular/core';
<<<<<<< HEAD
import { WelcomeComponent } from './components/home/welcome/welcome.component';

@Component({
  selector: 'my-app',
  template: '<welcome></welcome>'
=======
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent} from './components/home/welcome/overview/overview.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import {PrivateComponent} from './components/private.component';
@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>'
>>>>>>> a0172d17bde62cf581341f73be37dfea125470eb
})

export class AppComponent { }
