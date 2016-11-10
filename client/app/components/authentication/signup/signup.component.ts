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

signupForm:FormGroup;
constructor(fb:FormBuilder,private _signupService:SignupService){

    this.signupForm=fb.group({
        'newuserEmail':['somename@utu.fi',Validators.required],
        'newuserPassword':('your password',Validators.required)
    });
}

    submitted = false; //form not submitted : default
    data: string; //this variable contains our data
 
    //Show data in JSON format after form submit and set submitted to true
    onSubmit(data) {
        this.submitted = true;
        this.data = JSON.stringify(data);
        console.log(this.data);
                    }

    postnewuserToServer: string;
    newuserEmail:string;
    newuserPassword:string;


    postUserToServer()
    {
      this._signupService.postnewUserRestful(this.newuserEmail,this.newuserPassword).subscribe(//call the post
                data => this.postnewuserToServer = JSON.stringify(data), // put the data returned from the server in our variable
                error => console.log("Error HTTP Post Service"), // in case of failure show this message
                () => console.log("Job Done Post !")//run this code in all cases
                );
    }

   
}