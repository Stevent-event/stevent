import {Component} from '@angular/core'
import { SignupService } from '../../../signup.service';
@Component({
    moduleId: module.id,
    providers: [SignupService],

    styleUrls : ['signup.component.css'],
    templateUrl: 'signup.component.html'
})


export class SignupComponent{
componentName: 'SignupComponent';
  //Assign 
    constructor(_SignupService: SignupService) {
  //  this.newUsers = _SignupService.getnewUsers();
  }

}