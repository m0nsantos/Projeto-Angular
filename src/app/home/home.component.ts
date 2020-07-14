import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getLikes = []
  valor = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onLike() {
   this.getLikes.push({
    number: 1
   });
  }

}


  
