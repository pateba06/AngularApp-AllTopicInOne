import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // will get two things in user id and name
  user:{ id:string;name:string }
  // activatedRoute - it is for current active route
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // snapshot ..the params of the identifier we will use
    this.user = {
      // 
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    }
  }

}
