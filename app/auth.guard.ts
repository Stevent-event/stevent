import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CanActivate} from '@angular/router';
import {Auth} from './services/authentication.service';

@Injectable()
/*
export class AuthGuard {
    constructor(private auth: Auth, private router: Router){
        
    }

}
*/

export class AuthGuard implements CanActivate{
    constructor(private auth: Auth, private router: Router){
        
    }
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.auth.authenticated()){
            return ;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
