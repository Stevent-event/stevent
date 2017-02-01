import { Component, ElementRef } from '@angular/core';
import { NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from 'angular2-google-maps/core';

@Component({
    moduleId: module.id,
    selector: 'map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.css']
})

export class MapComponent implements OnInit{
    public lat: number;
    public lng: number;
    public searchControl: FormControl;
    public zoom: number;

    markerName: string;
    markerLat: string;
    markerLng: string;

    @ViewChild("search")
    public searchElementRef: ElementRef;

    constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

    ngOnInit() {
    //set google maps defaults
    this.zoom = 20;
    this.lat = 60.5;
    this.lng = 22.30;

    //create search FormControl
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
          this.zoom = 20;
        });
      });
    });
  }
    
    markers: marker[] = [
        {
            name: 'marker one',
            lat: 60.55,
            lng: 22.33
        },
        {
            name: 'marker two',
            lat: 60.50,
            lng: 22.30
        },
        {
            name: 'marker three',
            lat: 60.53,
            lng: 22.35
        }
    ];
    private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 10;
      });
    }
  }

    addNewMarker(){
        console.log('new marker');
        var newMarker = {
            //name: this.markerName,
            lat: parseFloat(this.markerLat),
            lng: parseFloat(this.markerLng)
        }
        this.markers.push(newMarker);
    }

}

interface marker{
    name?:string;
    lat:number;
    lng:number;
}
