import {Component} from '@angular/core'
import {AuthenticationService} from '../../../authentication.service';

export class User {
  email: string;
  password: string;
}


@Component({

  moduleId: module.id,
  providers: [AuthenticationService],
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
  
})

export class LoginComponent{
  user: User = {
    email: '',
    password: ''
  }

  login(user: User): void {
    console.log(user);
  }

 componentName: 'LoginComponent';
  //Assign 
    constructor(_AuthenticationService: AuthenticationService) {
  //  this.Users = _AuthenticationService.getUsers();

        }
}
