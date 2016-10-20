import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/home/welcome/overview/overview.component';
import { routing } from './app.routes';
import { AuthenticationService } from './authentication.service'

@NgModule({
  imports: [ BrowserModule, routing ],
<<<<<<< HEAD
  declarations: [ AppComponent, HomeComponent, WelcomeComponent,LoginComponent, SignupComponent ],
  bootstrap: [AppComponent]

=======
  declarations: [ AppComponent, HomeComponent, LoginComponent, SignupComponent, OverviewComponent ],
  bootstrap: [ AppComponent ]
>>>>>>> bca9af3ce347d66bf2b77cf001c651b65d809426
})

export class AppModule { }
