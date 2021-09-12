import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  users = [
    { name: 'badal', status: 'Active' },
    { name: 'Dhaval', status: 'Active' },
    { name: 'Sheetal', status: 'Active' },
  ];

  // method to add user
  addUser( name:string , status:string){
    this.users.push({name,status});
  }

  // method to change userStatus by using id
  updateStatus(id:number , status:string){
    this.users[id].status = status;
  }
}
