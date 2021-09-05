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
    employementMessage:string;

    getEmployeeInterpolation(){
       return this.employementMessage = " Updating message through method inside interpolation"
    }
}