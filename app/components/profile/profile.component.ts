import { Component, OnInit } from '@angular/core';
import {Auth} from 'app/services/authentication.service';
import { routes } from "./../../../app/app.routes";
import {EventService} from 'app/services/event.service';
import {Event} from 'app/classes/event';
@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
    providers: [EventService]
})
export class ProfileComponent implements OnInit { 
    profile:any;
    myEvents: Event[];
    joinedEvents: Event[];
    selectedList: 'myEvents';
    
    constructor(
        private auth:Auth,
        private eventService: EventService
        ){
        this.profile = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
    }

    getMyEvents() {
        this.eventService.getMyEvents()
        .subscribe(events => {
            this.myEvents = events;
            console.log(events);
        },
        err => {
            console.log(err);
        })
    }

    ngOnInit() {
        this.getMyEvents();
    }
}
