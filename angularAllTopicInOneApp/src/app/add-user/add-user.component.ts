import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userName: string;
  @Output() userAdded = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  OnUserAdded() {
    // emiting event to send data to Parent component -- sending userName Data to parent component so it can be push in userList
    this.userAdded.emit(this.userName);
  }
}
