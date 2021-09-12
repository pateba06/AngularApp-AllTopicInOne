import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // option1 -  navigate using router -navigateByURL
  onCategoriesClick1() {
    // perform some logig and then navigagte to page
    this.router.navigateByUrl('/categories');
  }

  // option 2 -  navigate using router -navigate
  onCategoriesClick2() {
    // it is property so we have to give array type of data. We can also pass id
    this.router.navigate(['/categories']);
  }
}
