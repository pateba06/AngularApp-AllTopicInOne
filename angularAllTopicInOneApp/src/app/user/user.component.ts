import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // will get two things in user id and name
  user: { id: string; name: string };
  // activatedRoute - it is for current active route
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // snapshot ..the params of the identifier we will use
    this.user = {
      //
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    // we need to listen to params. Whenever params changes we need to execute some code.
    // this is when we can get dynamic data in same component and use of params
    this.route.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        name: data['name'],
      };
    });

    // option 1 - to get queryParams and fragment using route.snapshot.queryParams
      console.log(this.route.snapshot.queryParams)
      console.log(this.route.snapshot.fragment)

    // option 2 -to get data of QueryParams using subscribe
      this.route.queryParams.subscribe((data)=>{
        console.log(data)
      })

    // option 2  to get data of fragmet using subscribe
      this.route.fragment.subscribe((data)=>{
        console.log(data)
      })

    
  }

  // 19- queryparam & fragment example
  getDhavalDetails() {
    this.router.navigate(['/users', 2, 'Dhaval'], {
      queryParams: { page: 3, search: 'Dhaval' },
    });
  }

  // 22 --on click take param to edit page
  onClickTakeParamToOtherPage(){
    this.router.navigate(['/users',this.user.id,'edit'],{
      // it will take two parameters merge and preserved
      queryParamsHandling:'merge'
    })
  }
}
