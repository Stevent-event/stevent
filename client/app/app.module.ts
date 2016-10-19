import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './components/home/welcome/welcome.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, WelcomeComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
