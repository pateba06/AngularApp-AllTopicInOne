import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
    };
    // we need to listen to params. Whenever params changes we need to execute some code.
    // this is when we can get dynamic data in same component and use of params
    this.route.params.subscribe((data:Params) =>{
      this.user = {
        id:data['id'],
        name:data['name']
      }
    })
  }

}
