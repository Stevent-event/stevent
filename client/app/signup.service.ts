import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class SignupService {
  newUsers:Array<any>;

  constructor() {
    this.newUsers = [
    
    ];
  }

  getFriends() {
    return this.newUsers;
  }
}