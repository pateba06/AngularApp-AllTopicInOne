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
  // userName we created to show $event example
  userName = '';
  // userNameTwoWayDataBinding we created for twoWayBinding
  userNameTwoWayDataBinding ='';
  // isUserCreated we created for *ngIf 
  isUserCreated = false;

  constructor() { 
    // Using setTimeOut to enable the button. The button which we have used for property binding
    setTimeout(() =>{
      this.allowUser =true;
    },5000)
  }

  ngOnInit() {
  }

  // below method we created for eventBinding example. this method will assign value to userStatus
  changeUserStatus(){
    this.userStatus = "New User successfully Created"
    // this will triger *ngIf
    this.isUserCreated = true;
  }

  //this method we created to show event binding using $event reserve word 
  onUpdateUser(event:any){
    this.userName = event.target.value
  }

  // ngStyle -example -adding color from here
  getColor(){
    if(this.isUserCreated === true){
      return 'green';
    }
    if(this.isUserCreated === false){
      return 'red';
    }
  }
}
