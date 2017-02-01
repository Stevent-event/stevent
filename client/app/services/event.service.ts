import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Event } from '../classes/event';

@Injectable()
export class EventService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private eventsUrl = 'api/event/getEvents';
    private createEventsUrl = 'api/event/createEvent';
    constructor(private http: Http) { }
    /*
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
    
        */
    // Fetch all existing comments
    getEvents(): Observable<Event[]> {
        // ...using get request
        return this.http.get(this.eventsUrl)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            //...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    createEvent(event: Event) {
        return this.http.post(this.createEventsUrl, event, {
        })
            .map(res => res.json());
    }


}
