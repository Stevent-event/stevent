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
  constructor(
    private authenticationService: AuthenticationService
  ){}
  user: User = {
    email: '',
    password: ''
  }

  login(user: User): void {
    this.authenticationService.login(user)
      .then(() => console.log("success in component"));
  
  }

/* componentName: 'LoginComponent';
  //Assign 
    constructor(_AuthenticationService: AuthenticationService) {
  //  this.Users = _AuthenticationService.getUsers();

        }*/
}
