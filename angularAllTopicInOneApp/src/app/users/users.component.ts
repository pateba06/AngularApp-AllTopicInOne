import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  // creating userList array.
  userList = [];
  constructor() {
  }

  ngOnInit() {}

  onUserAdded(event){
    this.userList.push(event)
  }
}
