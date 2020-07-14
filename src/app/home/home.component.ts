import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input('getLks') element: number;
  getLikes = [{ number: 'likes' },{ number: 'comments'}]


  constructor() { }

  ngOnInit(): void {
  }

  onLike() {
   this.getLikes.push({
     number: ''+ this.element
   });
  }
}
