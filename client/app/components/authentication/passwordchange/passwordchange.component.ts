import {Component} from '@angular/core'
import {AuthenticationService} from '../../../services/authentication.service';

import {User} from '../../../classes/user';

@Component({

  moduleId: module.id,
  templateUrl: 'passwordchange.component.html',
  styleUrls: ['passwordchange.component.css'],
  providers: [AuthenticationService]
  
})

export class PasswordChangeComponent{
  constructor(
    private authenticationService: AuthenticationService
  ){}
  user: User = {
    email: '',
    password: ''
  }

  passwordchange(user: User): void {
    this.authenticationService.login(user)
      .then(() => console.log("success in component: PasswordChangeComponent"));
  
  }
}
