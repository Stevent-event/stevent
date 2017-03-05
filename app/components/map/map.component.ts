import { Component, ElementRef } from '@angular/core';
import { NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from 'angular2-google-maps/core';
import { EventService } from "../../services/event.service";
import { Event } from "../../classes/event";

@Component({
  moduleId: module.id,
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
  providers: [EventService]
})

export class MapComponent implements OnInit {
  lat: number;
  lng: number;               
  searchControl: FormControl;
  zoom: number = 12;
  title: string;
  events: Event[];
  selectedEvent: Event;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private eventService: EventService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
  ) { }

  ngOnInit() {
    this.lat = 60.4518;
    this.lng = 22.2666;
    this.zoom = 12;
    this.getEvents();
    //create search FormControl
    this.searchControl = new FormControl();
    //set current position
    this.setCurrentPosition();
    //load Places Autocomplete.
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        // types: ["address"],
        componentRestrictions: { country: 'FIN' }
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
          this.zoom = 12;
        });
      });
    });
  }
//The current location of the user. Geolocation API.
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  getEvents() {
    this.eventService.getEvents()
      .subscribe(events => this.events = events, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

}
