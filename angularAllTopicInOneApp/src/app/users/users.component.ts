import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // Initial value false for disabling button.
  allowNewUser =false;

  constructor() { 

    // Using setTimeOut to enable the button. The button which we have used for property binding
    setTimeout(() =>{
      this.allowNewUser =true;
    },5000)
  }

  ngOnInit() {
  }

  
}
