import { EventEmitter, Injectable } from '@angular/core';

import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private loggingStatus: LoggingService) {}

  users = [
    { name: 'badal', status: 'Active' },
    { name: 'Dhaval', status: 'Active' },
    { name: 'Sheetal', status: 'Active' },
  ];

  statusUpdate = new EventEmitter<string>();

  // method to add user
  addUser( name:string , status:string){
    this.users.push({name,status});
    // calling logStatus method from another service and will show status in console on adding of user
    this.loggingStatus.logStatus(status)
  }

  // method to change userStatus by using id
  updateStatus(id:number , status:string){
    this.users[id].status = status;
    // using eventEmitter to emit status
    this.statusUpdate.emit(status)
      // calling logStatus method from another service and will show status whether is active or inactive
      this.loggingStatus.logStatus(status)
  }
}
