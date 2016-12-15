import { Component } from '@angular/core';
import {Auth} from '../../../services/authentication.service';
import { routes } from "../../../../app/app.routes";
import { tokenNotExpired } from 'angular2-jwt';

@Component({
    moduleId: module.id,
    selector: 'global-component',
    templateUrl: 'global.component.html'
})

export class GlobalComponent {
    constructor(private auth: Auth) {
        
    }
}