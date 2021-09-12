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
}
