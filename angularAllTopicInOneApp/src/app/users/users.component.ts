import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  // Initial value false for disabling button.
  allowUser = false;
  userStatus = 'User does not exist';
  // userName we created to show $event example
  userName = '';
  // userNameTwoWayDataBinding we created for twoWayBinding
  userNameTwoWayDataBinding = '';
  // isUserCreated we created for *ngIf
  isUserCreated = false;

  value=15;
  // *ngFor Example - we have array of object
  product = [
    {
      proimg:
        'https://tse2.mm.bing.net/th?id=OIP.lYVzyTHvj2cME5ekzl8bYAHaFj&pid=Api&P=0&w=217&h=164',
      name: 'Laptop',
      id: 'pro001',
      price: '150000',
    },
    {
      proimg:
        'https://tse3.mm.bing.net/th?id=OIP.F2OBmKwEv7h2uU29TY776wHaEK&pid=Api&P=0&w=306&h=173',
      name: 'Mobile',
      id: 'pro002',
      price: '160000',
    },
    {
      proimg:
        'https://tse1.mm.bing.net/th?id=OIP.l5t9FwPxH7KFdHzVwdTUYAHaFL&pid=Api&rs=1&c=1&qlt=95&w=146&h=102',
      name: 'Computer',
      id: 'pro004',
      price: '190000',
    },
    {
      proimg:
        'https://tse4.mm.bing.net/th?id=OIP.5Ne6c_C0QnDP-APepToqCgHaIp&pid=Api&P=0&w=300&h=300',
      name: 'Washing Machine',
      id: 'pro005',
      price: '140000',
    },
  ];

  constructor() {
    // Using setTimeOut to enable the button. The button which we have used for property binding
    setTimeout(() => {
      this.allowUser = true;
    }, 5000);
  }

  ngOnInit() {}

  // below method we created for eventBinding example. this method will assign value to userStatus
  changeUserStatus() {
    this.userStatus = 'New User successfully Created';
    // this will triger *ngIf
    this.isUserCreated = true;
  }

  //this method we created to show event binding using $event reserve word
  onUpdateUser(event: any) {
    this.userName = event.target.value;
  }

  // ngStyle -example -adding color from here
  getColor() {
    if (this.isUserCreated === true) {
      return 'green';
    }
    if (this.isUserCreated === false) {
      return 'red';
    }
  }

  // ngClass example
  mtlclasses = {
    class1: true,
    class2: true,
    class3: true,
  };
}
