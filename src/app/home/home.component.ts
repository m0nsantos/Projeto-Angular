import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getLikes  = [{ number: 1 }];
  getLikes1 = [{ number: 1 }];
  getLikes2 = [{ number: 1 }];
  getLikes3 = [{ number: 1 }];
  getLikes4 = [{ number: 1 }];
  getLikes5 = [{ number: 1 }];
  getDeslikes = [{ number: 1 }];
  getDeslikes1 = [{ number: 1 }];
  getDeslikes2= [{ number: 1 }];
  getDeslikes3 = [{ number: 1 }];
  getDeslikes4 = [{ number: 1 }];
  getDeslikes5 = [{ number: 1 }];

  constructor() { }

  ngOnInit(): void {
  }
  
  onLike() {
    this.getLikes[0].number += 1;
   }

  onLike1() {
   this.getLikes1[0].number += 1;
  }

  onLike2() {
    this.getLikes2[0].number += 1;
   }

  onLike3() {
    this.getLikes3[0].number += 1;
   }

  onLike4() {
   this.getLikes4[0].number += 1;
  }

  onLike5() {
    this.getLikes5[0].number += 1;
   }

  onDeslike() {
    this.getDeslikes[0].number += 1;
  }
  onDeslike1() {
    this.getDeslikes1[0].number += 1;
  }
  onDeslike2() {
    this.getDeslikes2[0].number += 1;
  }
  onDeslike3() {
    this.getDeslikes3[0].number += 1;
  }
  onDeslike4() {
    this.getDeslikes4[0].number += 1;
  }
  onDeslike5() {
    this.getDeslikes5[0].number += 1;
  }
}
