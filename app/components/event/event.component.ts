import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from "app/services/event.service";
import { Event } from "app/classes/event";
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'eventInfo',
    moduleId: module.id,
    templateUrl: 'event.component.html',
    styleUrls: ['event.component.html'],
    providers: [EventService]
})

export class EventComponent implements OnInit, OnDestroy {
    event: Event;
    _id: String;
    joined = false;
    currentUser: String;

    constructor(private eventService: EventService, private route: ActivatedRoute) {}

    getEvent(_id: String) {
        this.eventService.getEvent(_id)
        .subscribe(event => {
            this.event = event;
            if(event.attendingUsers != undefined) {
                for(let i=0; i<event.attendingUsers.length; i++) {
                    if(event.attendingUsers[i] == this.currentUser) {
                        this.joined = true;
                        break;
                    }
                }
            }
        },
        err => {
            console.log(err);
        })
    }

    joinEvent(_id: String) {
        console.log(_id);
        this.eventService.joinEvent(_id)
        .subscribe(res => {
            this.joined = true;
            this.getEvent(this._id);
        }, err => console.log(err));
    
    }

    leaveEvent(_id: String) {
        this.eventService.leaveEvent(_id)
        .subscribe(res => {
            this.joined = false;
            this.getEvent(this._id);
        }, err => console.log(err));
    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('profile')).user_id;
        this.route.params.subscribe(params => {
            this._id = params['_id']});
            
        this.getEvent(this._id);
    }

    ngOnDestroy() {
        
    }
}
