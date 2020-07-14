import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl:'./login.component.html',
    styleUrls: ['./login.component.css'],
    
})

export class LoginComponent implements OnInit{
    public user: User = new User();
    loginOk = false;
   
    constructor(private authService: AuthService, private router: Router){
        
    }

    ngOnInit(){

    }

    onLogin(){
        console.log(this.user);
        //this.authService.loginAuth(this.user);
        this.loginOk = this.authService.loginAuth(this.user);
        console.log(this.user);
        this.router.navigate(['/home']);

    }
}