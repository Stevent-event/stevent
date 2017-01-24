import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Event } from '../classes/event';

@Injectable()
export class EventService {

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getEvents(): Promise<Event[]> {
        return this.http.get('api/event/getEvents')
            .toPromise()
            .then(response => response.json() as Event[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}