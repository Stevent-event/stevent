import {Component} from '@angular/core'
import {AuthenticationService} from '../../../authentication.service';

export class User {
  email: string;
  password: string;
}


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
    console.log(user);
    this.authenticationService.login(user)
  
  }

/* componentName: 'LoginComponent';
  //Assign 
    constructor(_AuthenticationService: AuthenticationService) {
  //  this.Users = _AuthenticationService.getUsers();

        }*/
}
