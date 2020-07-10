import { Injectable } from '@angular/core';
import { User } from './user';
import { Console } from 'console';
import { LoginComponent } from 'Projeto-Angular/src/app/login/login.component';

//import { Router } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUser: boolean = false;
  
  constructor(/*private router: Router*/){
  }

  loginAuth(user: User){

    if (user.username === 'user' && user.password === '123') {

      this.authUser = true;   
      //this.router.navigate(['/']);
      return this.authUser;
      
    } else {
      this.authUser = false;      
    }

  }
}
