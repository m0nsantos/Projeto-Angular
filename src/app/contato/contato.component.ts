import { Component, OnInit, Injectable, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// @Injectable({
//   providedIn: 'root'
// })

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],  
})

export class ContatoComponent implements OnInit {

  firstName: string;
  lastName: string;
  telNumber: string;
  userMail: string;
  txtArea: string;
  concat: string;

  constructor() { }

  ngOnInit(): void {
  }

  initStorage()
  {
    localStorage.setItem('firstName',JSON.stringify(this.firstName)); 
    localStorage.setItem('lastName',JSON.stringify(this.lastName));
    localStorage.setItem('telNumber',JSON.stringify(this.telNumber));
    localStorage.setItem('userMail',JSON.stringify(this.userMail));
    localStorage.setItem('txtArea',JSON.stringify(this.txtArea));

    this.concat = this.firstName + ';' + this.lastName + ';' + this.telNumber + ';' + this.userMail + ';' + this.txtArea;
  }

  generateFile()
  {
    let res = this.concat;
    const blob = new Blob([res], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}
