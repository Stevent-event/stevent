import {Component} from '@angular/core';
import {Auth} from 'app/services/authentication.service';
import {routes} from "app/app.routes";
import {tokenNotExpired} from 'angular2-jwt';

@Component({
    moduleId: module.id,
    selector: 'global-component',
    templateUrl: 'global.component.html'
})

export class GlobalComponent {
    profile:any;

    constructor(private auth: Auth) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    // console.log(this.profile);
    }
}