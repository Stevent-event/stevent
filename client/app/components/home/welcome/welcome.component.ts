import { Component } from '@angular/core';
import { routes } from "../../../../app/app.routes";

@Component({
  selector: 'welcome',
  moduleId: module.id, //???
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css']
})

export class WelcomeComponent {
  title: "Welcome"
  
}