import { Component,Input,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { routes } from "../../../../app/app.routes";
import { EventService } from "../../../services/event.service";

import { Observable } from 'rxjs/Observable';
import { Event } from "../../../classes/Event";
@Component({
  selector: 'newEvent',
  moduleId: module.id, //???
  templateUrl: 'newEvent.component.html',
  styleUrls: ['newEvent.component.css'],
  providers: [EventService]
})

export class newEventComponent implements OnInit{
   constructor(private fb: FormBuilder) { }
   event:FormGroup;
  ngOnInit() {
    this.event = this.fb.group({
      eventName: ['', [Validators.required, Validators.minLength(2)]],
      dateAndtime: this.fb.group({
        date: ['', Validators.required],
        time: ['', Validators.required],
       // startTime: ['', Validators.required],
        //endTime: ['', Validators.required],
        description: ['', Validators.required],
      }),
    });
  }
  onSubmit() {
    console.log(this.event.value);
  }
}