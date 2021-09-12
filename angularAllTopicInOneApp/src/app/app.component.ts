import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // users type of array and defining data type and keeping empty array.created user property array of name and status
  users: { name: string; status: string }[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    // getting user from service
    this.users = this.userService.users;
  }
}
