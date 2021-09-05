import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // Initial value false for disabling button.
  allowUser =false;
  userStatus = "User does not exist"

  constructor() { 
    // Using setTimeOut to enable the button. The button which we have used for property binding
    setTimeout(() =>{
      this.allowUser =true;
    },5000)
  }

  ngOnInit() {
  }

  changeUserStatus(){
    this.userStatus = "New User successfully Created"
  }

  
}
