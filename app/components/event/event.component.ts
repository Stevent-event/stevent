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

    constructor(private eventService: EventService, private route: ActivatedRoute) {}

    getEvent(_id: String) {
        this.eventService.getEvent(_id)
        .subscribe(event => {
            this.event = event;
            console.log(this.event);
        },
        err => {
            console.log(err);
        })
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this._id = params['_id']});
            
        this.getEvent(this._id);
    }

    ngOnDestroy() {
        
    }
}
