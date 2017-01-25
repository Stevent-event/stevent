import { Component, OnInit } from '@angular/core';
import { routes } from "../../../app/app.routes";
import { EventService } from "../../services/event.service";
import { Observable } from 'rxjs/Observable';
//import './rxjs-operators';
import { Event } from "../../classes/Event";

@Component({
  selector: 'eventList',
  moduleId: module.id,
  templateUrl: 'eventList.component.html',
  styleUrls: ['eventList.component.css'],
  providers: [EventService]
})

export class eventListComponent implements OnInit {
  title:string;
  events: Event[];
  selectedEvent: Event;
  
  constructor(private eventService: EventService) { }
/*
  getEvents(): void {
    this.eventService
      .getEvents()
      .then(events => {
        this.events = events;
        console.log(events);
      });
  }
*/

    createEvent(event:string)
    {
      this.eventService.createEvent(event)
      .subscribe(
        event=>this.events.push(),
        err => {
            // Log errors if any
                console.log(err);
                });
    }

  ngOnInit() {
    this.eventService.getEvents()
  .subscribe (events => this.events = events, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
  
}