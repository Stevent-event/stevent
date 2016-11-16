import { Component } from '@angular/core';
import { routes } from "../../../../app/app.routes";
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'AuthGuard',
  moduleId: module.id, //???
  templateUrl: 'AuthGuard.component.html',
  styleUrls: ['AuthGuard.component.css']
})

export class AuthGuardComponent {
  title: "AuthGuard"
  
}
