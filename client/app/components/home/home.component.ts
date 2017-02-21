import { Component } from '@angular/core';
import {Auth} from '../../../app/services/authentication.service';
import { routes } from '../../../app/app.routes';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent { 
    constructor(private auth:Auth){
        
    }
}
