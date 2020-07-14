import { Component, OnInit, Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  first_name;
  lastname;
  localStorage : Storage

  constructor() { }

  ngOnInit(): void {
  }

  initStorage()
  {
    
    
    // var first_name = document.getElementById('first_name');
    // localStorage.setItem('first_name', this.first_name);
 
    var last_name = document.getElementById('last_name').innerHTML;
    console.log(this.lastname);
    localStorage.setItem('last_name',last_name);
 
    // var email = document.getElementById('email');
    // localStorage.setItem('email',email.nodeValue);
 
    // var telephone_number = document.getElementById('telephone_number');
    // localStorage.setItem('telephone_number',telephone_number.nodeValue);
  
    // var textarea1 = document.getElementById('textarea1');
    // localStorage.setItem('textarea1',textarea1.nodeValue);
  }
}
