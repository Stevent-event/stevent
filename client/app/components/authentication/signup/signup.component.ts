import {Component} from '@angular/core'
import { SignupService } from '../../../signup.service';
import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';
@Component({
    moduleId: module.id,
    providers: [SignupService],

    styleUrls : ['signup.component.css'],
    templateUrl: 'signup.component.html'
})


export class SignupComponent{
 form: FormGroup;
    
    userName = new FormControl("", Validators.required);
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "userName": this.userName,
            "password":["", Validators.required]
        });
    }
    onSubmit() {
        console.log("form submitted");
        console.log(this.form);
    }

}