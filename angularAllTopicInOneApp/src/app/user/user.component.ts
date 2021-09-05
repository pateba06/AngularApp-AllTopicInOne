import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl:'./user.component.html',
    styleUrls:['./user.component.css']
})
export class UserComponent {
    // declaring variable for dataBinding example
    empId =10;
    employementStatus = 'Employed'

    getEmployeeInterpolation(){
        this.employementStatus = "I am Employeed. Updating message through method inside interpolation"
    }
}