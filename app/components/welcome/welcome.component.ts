import { Component } from '@angular/core';
import { routes } from "./../../../app/app.routes";
import {Auth} from '../../services/authentication.service';
import { tokenNotExpired } from 'angular2-jwt';
@Component({
  selector: 'welcome',
  moduleId: module.id, //???
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css']
})

export class WelcomeComponent {
        constructor(private auth:Auth){

}
title: 'welcome'
}