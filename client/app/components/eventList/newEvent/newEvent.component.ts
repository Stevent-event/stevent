import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
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

  ngOnInit() {
    this.event = this.fb.group({
      name: ['',[Validators.required]],
      owner: ['',[Validators.required]],
      /*
            location: this.fb.group({
              lat:'',
              lon: '',
            }),
      */
      /*
          address: this.fb.group({
            street: '',
            route: '',
            locality: '',
            postal_code: '',
            country: '',
            formatted_address:'',
          }),
          */

      address: this.fb.group({
        street: '',
        postalcode: '',
        city: '',
        country: '',
      }),


      description: '',
      category: '',
      date: '',
      startTime: '',
      endTime: '',
      //  ongoing:'',
      // attendingUsers: '',

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
