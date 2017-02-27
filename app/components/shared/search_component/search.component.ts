import {Component} from '@angular/core';
// import {Auth} from '../../../services/authentication.service';
import {routes} from "app/app.routes";
// import {tokenNotExpired} from 'angular2-jwt';


@Component({
    moduleId: module.id,
    selector: 'search-component',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css'],
})

export class SearchComponent {
    show1: boolean;
    show2: boolean;
    show3: boolean;

    constructor() {
        this.show1 = false;
        this.show2 = false;
        this.show3 = false;
    }

    toggleSearch(field: String) {
        console.log(event);
        if (field == 'address') {
            this.show1 = !this.show1;
        } else if(field == 'category') {
            this.show2 = !this.show2;
        } else if(field == 'time') {
            this.show3 = !this.show3;
        }
    }
}