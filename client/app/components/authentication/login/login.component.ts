import {Component} from '@angular/core'
import {AuthenticationService} from '../../../services/authentication.service';

import {User} from '../../../classes/user';

@Component({

  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [AuthenticationService]
  
})

export class LoginComponent{
  isLoggedIn: boolean;
  constructor(
    private authenticationService: AuthenticationService
  ){}

  user: User = {
    name: '',
    email: '',
    password: ''
  }

  login(user: User): void {
    this.authenticationService.login(user)
      .then(() => console.log("success in component"));
      this.isLoggedIn = true;
  
  }

/* componentName: 'LoginComponent';
  //Assign 
    constructor(_AuthenticationService: AuthenticationService) {
  //  this.Users = _AuthenticationService.getUsers();

        }*/
}
