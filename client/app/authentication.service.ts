import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import {Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';
export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 
var users = [
  new User('admin@admin.com','adm9'),
  new User('user1@gmail.com','a23')
];
 
@Injectable()
export class AuthenticationService{
    constructor(
      private http: Http,
      private _router: Router
    
    ){}
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }
 
  login(user){
    // var authenticatedUser = users.filter(u => u.email === user.email);
    /*if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser);
      this._router.navigate(['Home']);      
      return true;
    }*/
    return this.http
          .post('/api/authentication/login', user)
          .toPromise()
          .then(res => console.log("onnistui, res: " + res))
    // return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['Login']);
    }
  }
}