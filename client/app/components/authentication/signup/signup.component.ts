import {Component} from '@angular/core'
import { SignupService } from '../../../signup.service';
import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';
import {User} from '../../../classes/user';
@Component({
    moduleId: module.id,
    providers: [SignupService],

    styleUrls : ['signup.component.css'],
    templateUrl: 'signup.component.html'
})


export class SignupComponent{
    newUser= new User();// user instance
 
    
    submitted =false; //form not submitted : default
    data:string; //this variable contains form data

    onSubmit(data) {
        console.log("form submitted");
        this.submitted= true;
        this.data=JSON.stringify(data);
        console.log(this.data);
    }

}