import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userName: string;
  @Output() userAdded = new EventEmitter<string>();

  @ViewChild('userInputViewChild') userInputViewChild:ElementRef
  constructor() {}

  ngOnInit() {}

  // below method we used for #templateReference example and sending message from child to parent
  OnUserAdded(userInput) {
    // emiting event to send data to Parent component -- sending userName Data to parent component so it can be push in userList
    // this.userAdded.emit(this.userName);
    this.userAdded.emit(userInput.value);
  }

  // below function to show example of viewchild
  onUserAddedViewChild(){
    // accessing the #userInputViewChild template ref variable and using viewChild  and accessing the value
    this.userAdded.emit(this.userInputViewChild.nativeElement.value)
  }
}
