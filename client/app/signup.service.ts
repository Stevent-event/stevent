import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import {Router} from '@angular/router';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {User} from './classes/user';

@Injectable()
export class SignupService {
    private _newusersUrl:string = "/api/authentication/signup";
    constructor(private _http: Http){ }


      postnewUserRestful (newuserEmail: string,newuserPassword:string): Observable<Users> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._newusersUrl, { newuserEmail,newuserPassword }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

    /*postnewUserRestful(newuserEmail:string,newuserPassword:string){
 
        let body = JSON.stringify({ "newuserEmail":newuserEmail,"newuserPassword":newuserPassword});
        
 
        return this._http
        .post(this._newusersUrl, body)
            .map(res => res.json())
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }*/

}