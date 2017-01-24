import { Component } from '@angular/core';
import { NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from 'angular2-google-maps/core';

@Component({
    moduleId: module.id,
    selector: 'map',
    templateUrl: 'map.component.html',
      styleUrls: ['map.component.css']
})

export class MapComponent{
    lat: 60.5;
    lng: 22.30;
    zoom: 10;
    markerName: string;
    markerLat: string;
    markerLng: string;
    
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

    addNewMarker(){
        console.log('new marker');
        var newMarker = {
            name: this.markerName,
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
