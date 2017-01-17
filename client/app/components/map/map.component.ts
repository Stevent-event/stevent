import { Component } from '@angular/core';
import {Auth} from '../../services/authentication.service';
import { routes } from "./../../../app/app.routes";
import { tokenNotExpired } from 'angular2-jwt';

@Component({
    moduleId: module.id,
    selector: 'map',
    templateUrl: 'map.component.html',
})

export class MapComponent {       
    }
