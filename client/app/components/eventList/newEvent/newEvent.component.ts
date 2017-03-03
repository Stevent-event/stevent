import { Component, Input, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { routes } from "app/app.routes";
import { EventService } from "app/services/event.service";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Event } from "app/classes/event";
import 'rxjs/add/operator/map';
import {Moment} from 'moment';
import { MapComponent } from '../../map/map.component';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from 'angular2-google-maps/core';


@Component({
  selector: 'newEvent',
  moduleId: module.id, //???
  templateUrl: 'newEvent.component.html',
  styleUrls: ['newEvent.component.css'],
  providers: [EventService, MapComponent]
})

export class newEventComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private http: Http,
    private mapComponent: MapComponent,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) { }

  lat:number;
  lng:number;
  searchControl: FormControl;


  event: FormGroup; // form
  responseStatus: Object = [];
  limitedAttendees:Boolean;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  ngOnInit() {
    this.searchControl = new FormControl();
    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
        });
      });
    });
    this.event = this.fb.group({
      name: ['',[Validators.required]],
      owner: ['',[Validators.required]],
            location: this.fb.group({
              lat:'',
              lon: '',
            }),
          address: this.fb.group({
            street: '',
            route: '',
            locality: '',
            postal_code: '',
            country: '',
            formatted_address:'',
          }),

      // address: this.fb.group({
      //   street: '',
      //   postalcode: '',
      //   city: '',
      //   country: '',
      // }),


      description: '',
      category: '',
      date: '',
      startTime: '',
      endTime: '',
      //  ongoing:'',
      // attendingUsers: '',
      limitedAttendees:'',
      maximumAttendees:'',
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
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

}
