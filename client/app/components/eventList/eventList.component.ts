import { Component, OnInit } from '@angular/core';
import { routes } from "../../../app/app.routes";
import { EventService } from "../../../app/services/event.service";
import { Observable } from 'rxjs/Observable';
//import './rxjs-operators';
import { Event } from "../../../app/classes/event";
import { SearchComponent } from '../../../app/components/shared/search_component/search.component';

@Component({
  selector: 'eventList',
  moduleId: module.id,
  templateUrl: 'eventList.component.html',
  styleUrls: ['eventList.component.css'],
  providers: [EventService]
})

export class eventListComponent implements OnInit {
  title: string;
  events: Event[];
  selectedEvent: Event;

  constructor(private eventService: EventService) { }

  getEvents() {
    this.eventService.getEvents()
      .subscribe(events => this.events = events, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  ngOnInit() {
    this.getEvents();
  }

}