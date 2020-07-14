import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getLikes = [{number: 1}]

  constructor() { }

  ngOnInit(): void {
  }

  onLike() {
    this.getLikes[0].number += 1;
  }

}


  
