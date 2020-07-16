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

  getDeslikes = [{ number: 1 }];
  getDeslikes1 = [{ number: 1 }];
  getDeslikes2 = [{ number: 1 }];

  commentArea: string;
  commentText: string;

  commentArea1: string;
  commentText1: string;

  commentArea2: string;
  commentText2: string;



  constructor() { }

  ngOnInit(): void {
  }

  onComment(){
    localStorage.setItem('commentArea',JSON.stringify(this.commentArea));
    this.commentText = this.commentArea;
  }

  onComment1(){
    localStorage.setItem('commentArea1',JSON.stringify(this.commentArea1));
    this.commentText1 = this.commentArea1;
  }

  onComment2(){
    localStorage.setItem('commentArea2',JSON.stringify(this.commentArea2));
    this.commentText2 = this.commentArea2;
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

  onDeslike() {
    this.getDeslikes[0].number += 1;
  }
  onDeslike1() {
    this.getDeslikes1[0].number += 1;
  }
  onDeslike2() {
    this.getDeslikes2[0].number += 1;
  }
}
