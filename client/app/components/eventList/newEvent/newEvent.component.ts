import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { routes } from "app/app.routes";
import { EventService } from "app/services/event.service";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Event } from "app/classes/event";
import 'rxjs/add/operator/map';

@Component({
  selector: 'newEvent',
  moduleId: module.id, //???
  templateUrl: 'newEvent.component.html',
  styleUrls: ['newEvent.component.css'],
  providers: [EventService]
})

export class newEventComponent implements OnInit {

  constructor(private fb: FormBuilder, private eventService: EventService, private http: Http) { }

  event: FormGroup; // form
  responseStatus: Object = [];
  eventObject: Event = {
    eventName: "",
    eventOwner: "",
    location: {},
    address: "",
    description: "",
    category: "",
    startTime: new Date(),
    endTime: new Date(),
    ongoing: false,
    attendingUsers: [""] 
  };

  ngOnInit() {
    this.event = this.fb.group({
      eventName: ['', [Validators.required, Validators.minLength(2)]],
      eventOwner: [''],

      location: this.fb.group({
        lat: [''],
        lon: [''],
      }),


      address: this.fb.group({
        street_number: [''],
        route: [''],
        locality: [''],
        postal_code: [''],
        country: [''],
        formatted_address: [''],
      }),

      eventDescription: this.fb.group({
        date: ['', Validators.required],
        time: ['', Validators.required],
        // startTime: ['', Validators.required],
        //endTime: ['', Validators.required],
        description: ['', Validators.required],
      }),
      attendingUsers: [''],

    });

  }


  onSubmit() //when user clicks create button , this function executes
  {
    console.log("Create button clicked, event submitted" + this.event.value)
    this.eventService.createEvent(this.event.value).subscribe(  //creatEvent method from the EventService component is called
      data => console.log(this.responseStatus = data),
      err => console.log(err),
      () => console.log('Request Completed')
    );

  }

}
