import { Component , OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  // creating userList array.
  userList = ['Badal'];

  // created name variable to show the ngOnchages example
  name ="Badal Patel"
  constructor(private loggingService: LoggingService) {
  }

  ngOnInit() {
  }

  onUserAdded(event){
    this.userList.push(event)
    // calling method from services
    this.loggingService.functionFromLoggingService()
  }

// below function is created to see ngOnChanges example
  onNameChange(){
    this.name = "Hi my name is Badal Rameshbhai Patel"
  }

//below function is created to see ngOnDestroy Example
  onDelete(){
    // emptying the array to see ngOnDestroy hook
    this.userList =[]
  }
}
