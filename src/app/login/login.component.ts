import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl:'./login.component.html',
    styles: [
        `
    
        `
    ],
})

export class LoginComponent{
    senha = '';
    usuario = '';
    login = false;
   
    constructor(){
        
    }

    OnInit(){}

    onLogin(){
        this.login = true;
    }

}