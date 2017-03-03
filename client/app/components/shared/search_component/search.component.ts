import {Component, OnInit, ViewChild, ElementRef,NgZone} from '@angular/core';
// import {Auth} from '../../../services/authentication.service';
import {routes} from "app/app.routes";
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from 'angular2-google-maps/core';
// import {tokenNotExpired} from 'angular2-jwt';
import { MapComponent } from '../../map/map.component';


@Component({
    moduleId: module.id,
    selector: 'search-component',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css'],
    providers: [MapComponent]

})

export class SearchComponent implements OnInit {
    lat: number;
    lng: number;
    searchControl: FormControl;
    show1: boolean;
    show2: boolean;
    show3: boolean;

    constructor(
        private mapComponent: MapComponent,
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
    ) {
        this.show1 = false;
        this.show2 = false;
        this.show3 = false;
    }

    @ViewChild("search2")
    public searchElementRef: ElementRef;

    ngOnInit() {
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
        });
      });
    });
  }

    toggleSearch(field: String) {
        console.log(event);
        if (field == 'address') {
            this.show1 = !this.show1;
        } else if(field == 'category') {
            this.show2 = !this.show2;
        } else if(field == 'time') {
            this.show3 = !this.show3;
        }
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