import { Component, OnInit } from '@angular/core';
import { routes } from "../../../app/app.routes";
import { EventService } from "../../services/event.service";

// import { Event } from "../../classes/Event";

@Component({
  selector: 'eventList',
  moduleId: module.id,
  templateUrl: 'eventList.component.html',
  styleUrls: ['eventList.component.css'],
  providers: [EventService]
})

export class eventListComponent {
  constructor(private eventService: EventService) {}
 
getEvents(): void {
  // this.eventService.getEvents().then(events => this.events = events);
}

 ngOnInit(): void {
   this.getEvents();
 }
}