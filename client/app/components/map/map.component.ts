import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'map',
    templateUrl: 'map.component.html',
      styleUrls: ['map.component.css']
})

export class MapComponent {
    lat: number = 60.4518;
    lng: number = 22.22666;
    zoom: number = 10;

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
