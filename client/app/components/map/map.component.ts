import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'map',
    templateUrl: 'map.component.html',
      styleUrls: ['map.component.css']
})

export class MapComponent {
    title: string = 'kartta';
    lat: number = 60.4618696;
    lng: number = 22.3316061;
    }
