import {Component} from '@angular/core'
import {AuthenticationService,User} from '../../../authentication.service';
@Component({

moduleId: module.id,
providers: [AuthenticationService],
templateUrl: 'login.component.html',
styleUrls: ['login.component.css']
})
export class LoginComponent{
 componentName: 'LoginComponent';
  //Assign 
    constructor(_AuthenticationService: AuthenticationService) {
  //  this.Users = _AuthenticationService.getUsers();

        }
}

