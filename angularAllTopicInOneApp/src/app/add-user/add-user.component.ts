import { Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {

  userName : string;
  constructor(private userService:UserService) {}
  onAddUdser(){
    this.userService.addUser(this.userName,'active')
  }
}
