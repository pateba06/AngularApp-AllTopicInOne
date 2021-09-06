import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  userName:string ='';
  // creating userList array.
  userList = [];
  constructor() {
  }

  ngOnInit() {}

  userAdded(){
    // userName is assinged to [(ngModel)]="userName" . so whatever input entered it will push in the userList
    this.userList.push(this.userName)
  }
}
