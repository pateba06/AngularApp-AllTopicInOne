# AngularApp-AllTopicInOne

** Note

main - This branch has upto 3 topics

develop2 - This branch has topic post 3

develop3 - This branch has topic post 11

develop4 - This branch has topic from 15th 

In this app it will cover most topic in one app. I am creating branch for each topic then on periodical increment I will merge that into Main branch. 

01-AngularBasicSetup branch

    For Bootstrap installation 
<code>npm install bootstrap jquery popper.js --save</code>.


    Then added below in angular.json

<code>         
        "styles": 
    [
        "src/styles.css",
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
        "scripts": [
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/popper.js/dist/umd/popper.min.js",
            "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]</code>.

    code for creating new component. Below code will generate user component
<code>ng generate component users</code>.

02-DataBinding branch

    In Interpolation we can only use String, but in Property binding we can use boolean as well.
    disable attribute won't work with string or string interpolation - it does not read true or false, so in that case we have to use Propertybinding

    Interpolation

        it should always return string. or any data which can be converted into string.
        Can be used for string concenation
        We can use javaScript property also<
        
        Example 1
        html
        <h1> {{emp}} </h1>
        TS
        emp="Badal"

        Example 2 - We can also use method inside Interpolation
        html
        <h1> {{empInterpolation()}} </h1>
        TS
        emp:string;
        empInterpolation(){
           return this.emp = "Badal"
        }

    PropertyBinding

        Example 1 - disable button using boolean value. Enabling after 5 seconds once the variable becomes True

        html
            <button class="btn btn-primary" [disabled]="!allowNewUser">Add User</button>
        TS
            // Initial value false for disabling button.
            allowNewUser =false;

            constructor() { 
            // Using setTimeOut to enable the button. The button which we have used for property binding
            setTimeout(() =>{
            this.allowNewUser =true;
            },5000)
        }



    EventBinding
       example

         html
            <button (click)="clickMethod()">Add User</button>
            <!-- Event Binding Example  -->
            <div>{{userStatus}}</div>  

        TS
            userStatus = "User does not exist"
            clickMethod(){
                this.userStatus = "New User successfully Created"
            }


    Eventbinding using $event reserved word

        example

        html
        <label>User Name: {{userName}}</label>
         <input type="text" class="form-control" (input)="onUpdateUser($event)"/>

        TS
          // userName we created to show $event example
         userName = '';
           //this method we created to show event binding using $event reserve word 
            onUpdateUser(event:any){
                this.userName = event.target.value
            }


        TwoWay - DataBinding
        We can achieve same thing $event, but let see proper way below.
        [()]  - it combination of event and propertybinding

        Example
        ** Make sure FormsModule is imported in app.module.ts to work
        Html
            <label>User Name TwoWayDataBinding Example: {{userNameTwoWayDataBinding}}</label>
            <input type="text" class="form-control" [(ngModel)]="userNameTwoWayDataBinding"/>

        TS
        <!-- I can keep some value from the beginning, and later any message in this input will change value in label-->
        userNameTwoWayDataBinding ="Hello I am using Two Way binding"


03-AngularDirective - branch
        <h1> There are three types of directives</h1>
                <ol>
                <li>Component Directives</li>
                <p>Directives with own component</p>
                <li>Structural Directives</li>
                <p>Manipulating the Dom Elements</p>
                <ul>
                    <li>ngIf</li>
                    <li>ngFor</li>
                    <li>ngSwitch</li>
                </ul>
                <li>Attribugte Directives</li>
                <p>Changes the look and behavior of the dom</p>
                <ul>
                    <li>ngStyle</li>
                    <li>ngClass</li>
                </ul>
                </ol>



*ngIf - Structural Directives

        it is used when we want to show the output conditionally in the template

        Example: *ngIf example

        HTML
          <button (click)="changeUserStatus()">Add User</button>
          <!-- *ngIf Example - this div would only show when isUserCreated will become true -->
          <div *ngIf="isUserCreated"> New User Added</div>
        
        TS
          isUserCreated = false;
          changeUserStatus(){
              this.isUserCreated = true;
          }

    *ngIf with else condition
        Note:This is not good practice, it is better to use ng-template. Please look ng-template in next example

        Example: *ngIf Else example
        HTML
          <button (click)="changeUserStatus()">Add User</button>
          <!-- *ngIf Example - this div would only show when isUserCreated will become true -->
          <div *ngIf="isUserCreated"> New User Added</div>
          <div *ngIf="!isUserCreated"> No User been created</div>
        TS
          isUserCreated = false;
          changeUserStatus(){
              this.isUserCreated = true;
          }


    ng-template instead using *ngIf condition

    Note - ng-template is the best practice to use instead of above *ngIf else condition

    Example: ng-template example

        Html
        <div *ngIf="isUserCreated;else noUser">{{userStatus}}</div>
        <ng-template #noUser>
            <div *ngIf="!isUserCreated">{{userStatus}}</div>
        </ng-template>

          TS
          isUserCreated = false;
          changeUserStatus(){
              this.isUserCreated = true;
          }


    Note - let understand the structure of *ngIF

        <div *ngIf="Available">Shwo the div when isavailable is true<div>
            The above *ngIf what it will do in the backend it will generate or converted on backend <ng-template> on back
            -----------
                <ng-template>
                    <div>Show the div when isavailable is true</div>
                </ng-template>
            ---------

            So that why we can write *ngIf other way as well and it will work as *ngIf. by keeping [propertybinding]=""
                <ng-template [ngIf]="isAvailable">                    // This will work same as keeping *ngIf in div or other element
                    <div>Show the div when isavailable is true</div>
                </ng-template>
                
                

*ngStyle - Attribute Directives

    We use ngStyle , when we want to apply particular style to  particular Element. We can apply dynamical style based on requirement.
    

    Example

        Html
             <div *ngIf="isUserCreated;else noUser" [ngStyle] = "{'background-color':getColor()}">{{userStatus}}</div>
             <ng-template #noUser>
                <div *ngIf="!isUserCreated"  [ngStyle] = "{'background-color':getColor()}">{{userStatus}}</div>
            </ng-template>

        TS
          // ngStyle -example -adding color from here
            getColor(){
                if(this.isUserCreated === true){
                return 'green';
                }
                if(this.isUserCreated === false){
                return 'red';
                }

*ngClass - Attribute Directives
    We can apply dynamic class using *ngClass

    Example - *ngClass

        Html
         <!-- Using [ngClass] directive - to assign multiple classes Inspect to see class-->
            <div class="box" [ngClass]="'class1 class2 class3'">
                <p>[ngclass] directive</p>
            </div>
            <!-- Using [ngClass]  directive- to assign multiple classes Inspect to see class are added uinng object-->
            <div class="box" [ngClass]="mtlclasses">
                <p>[ngclass] directive</p>
            </div>
        TS

              // ngClass example
                mtlclasses = {
                    class1: true,
                    class2: true,
                    class3: true
                }


*ngFor - Structrual Directives

    *ngFor - It is angular directive which work's like for loop.
    *ngFor ="let array of arrays"   ---basic sytax---it will loop over object.

          <!-- *ngFor Example -->
          HTML

            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th>Sr No</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Product Id</th>
                    <th>Product Price</th>
                </tr>
                </thead>
                <tbody>
                <tr *ngFor="let pro of product;index as i">
                    <td>{{i+1}}</td>
                    <td><img src="{{pro.proimg}}" style="width: 100px;height: 50px;"></td>
                    <td>{{pro.name}}</td>
                    <td>{{pro.id}}</td>
                    <td>{{pro.price}}</td>
                </tr>
                </tbody>
            </table>
        TS

          // *ngFor Example - we have array of object
            product = [
                {
                proimg:
                    'https://tse2.mm.bing.net/th?id=OIP.lYVzyTHvj2cME5ekzl8bYAHaFj&pid=Api&P=0&w=217&h=164',
                name: 'Laptop',
                id: 'pro001',
                price: '150000',
                },
                {
                proimg:
                    'https://tse3.mm.bing.net/th?id=OIP.F2OBmKwEv7h2uU29TY776wHaEK&pid=Api&P=0&w=306&h=173',
                name: 'Mobile',
                id: 'pro002',
                price: '160000',
                },
                {
                proimg:
                    'https://tse1.mm.bing.net/th?id=OIP.l5t9FwPxH7KFdHzVwdTUYAHaFL&pid=Api&rs=1&c=1&qlt=95&w=146&h=102',
                name: 'Computer',
                id: 'pro004',
                price: '190000',
                },
                {
                proimg:
                    'https://tse4.mm.bing.net/th?id=OIP.5Ne6c_C0QnDP-APepToqCgHaIp&pid=Api&P=0&w=300&h=300',
                name: 'Washing Machine',
                id: 'pro005',
                price: '140000',
                },
            ];


*ngSwitch 
    ngSwitch ,ngSwitchCase, ngSwitchDefault
    
        Example

            <!-- ngSwitch/ngSwitchCase/ngSwitchDefault directive example -->
        <div [ngSwitch]="value">
            <div *ngSwitchCase="10">Value is 10</div>
            <div *ngSwitchCase="15">Value is 15</div>
            <div *ngSwitchDefault>Value is default</div>
        </div>
        
        
        
  ---From 04 the code is merged in develop Branch
        
04-Interaction Between Components - branch  --merged in develop branch

    Communication between Parent to Child and Child to Parent
        Parent to Child  - we use @Input decorator
        Child to Parent - we use @Output decorator

        EXAMPLE - Communication from Parent to Child component

            PARENT -Users- HTML
                <div class ="users-container --Parent Component">
                    <h1>Users Component -- Parent component</h1>
                    <!--Getting data from add-user child component and using in Parent component. adding in userList -->
                    <app-add-user (userAdded)="onUserAdded($event)"></app-add-user>
                    <div class="mt-3">
                        <h3>User List</h3>
                        <!-- sending userList data in user - child component -->
                        <app-user *ngFor='let user of userList' [userName]="user"></app-user>
                    </div>
                </div>
                
            PARENT -Users- TS
                    // creating userList array.
                    userList = [];

                    onUserAdded(event){
                        this.userList.push(event)
                        }
                        
            CHILD -User- HTML -- It is for communicating from Parent to child

                <div class="user-container">
                    <h1 class="border-wrap text-center">User Component - Child Component</h1>
                    <h5>{{ userName }}</h5>
                </div>
            CHILD -User- TS
                 @Input() userName: string;

            CHILD -Add-User - HTML  --- It is for communicating from child to Parent
                <div class="form-group users-container">
                    <h1 class ="border-wrap text-center">Add-Users Component -Child Component</h1>
                    <h5>Add User</h5>
                    <label>User Name:</label>
                    <input type="text" class="form-control" [(ngModel)]="userName">
                    <div class="mt-2">
                        <!-- we want to send data to Parent compoent i.e users component on emit -->
                        <button class ="btn btn-primary" (click)="OnUserAdded()">Add User</button>
                    </div>
                </div>

            CHILD -Add-User -TS
                userName: string;
                @Output() userAdded = new EventEmitter<string>();
                constructor() {}

                ngOnInit() {}

                OnUserAdded() {
                    // emiting event to send data to Parent component -- sending userName Data to parent component so it can be push in userList
                    this.userAdded.emit(this.userName);
                }

05-usingLocalReferencesInAngular


        Example - usingLocalReferencesInAngular

        HTML
        <!-- template reference variable . we can directly use it #userInput -->
            <input type="text" class="form-control" #userInput>
            <button class ="btn btn-primary" (click)="OnUserAdded(userInput)">Add User</button>
            <h1> {{userName}}</h1>
        TS
            userName:string;

         OnUserAdded(data) {
             this.userNmae = data.value
        }

06-viewChildAndElementRef

    Access Html Elements in the DOM & Template with @ViewChild and the type ElementRef in angular

        HTML
          <input type="text" class="form-control" #userInputViewChild>
         <button class ="btn btn-primary" (click)="onUserAddedViewChild()">Add User using View Child</button>
        TS
            <!-- this is for child to parent comumnication -->
             @Output() userAdded = new EventEmitter<string>();

            <!-- usingView child by referencing template Reference variable and accessing the value using Element Ref -->
            @ViewChild('userInputViewChild') userInputViewChild:ElementRef
              // below function to show example of viewchild
            onUserAddedViewChild(){
                // accessing the #userInputViewChild template ref variable and using viewChild  and accessing the value
                this.userAdded.emit(this.userInputViewChild.nativeElement.value)
                }


07-LifeCycleHooks

    constructor:: This is invoked when Angular creates a component or directive by calling `new` on the class.

    ngOnChanges:: Invoked *every* time there is a change in one of th _input_ properties of the component.

    ngOnInit::
    Invoked when given component has been initialized. +
    This hook is only called *once* after the first `ngOnChanges`

    ngDoCheck::
    Invoked when the change detector of the given component is invoked.
    It allows us to implement our own change detection algorithm for the given component. +
    IMPORTANT: `ngDoCheck` and `ngOnChanges` should not be implemented together on the same component.
    This hook should be use wisely as it can decrease the performace

    ngAfterContentInit::
    Invoked _after_ Angular performs any content projection into the component's view (see the previous lecture on _Content Projection_ for more info). 

    ngAfterContentChecked:: Invoked each time the content of the given component has been checked by the change detection mechanism of Angular.

    ngAfterViewInit:: Invoked when the component's view has been fully initialized.

    ngAfterViewChecked:: Invoked each time the view of the given component has been checked by the change detection mechanism of Angular.

        ngOnDestroy::
    This method will be invoked just before Angular destroys the component. +
    Use this hook to unsubscribe observables and detach event handlers to avoid memory leaks.

    === Hooks for the Component's Children



08-creatingCustomAttributeDirective

    When the directive gets created Angular can inject an instance of something called ElementRef into its constructor.
    The ElementRef gives the directive direct access to the DOM element upon which it’s attached.

    1 create directive

            import { Directive, ElementRef, OnInit } from '@angular/core';

                @Directive({
                selector: '[appHighlightText]'
                })
                export class HighlightTextDirective implements OnInit {
                constructor(private element:ElementRef) {

                }

                ngOnInit(){
                (this.element.nativeElement as HTMLElement).style.backgroundColor = 'red';
                }
                }

    2 using the directive in user component
            user.html
            <!-- Custom Directive -->
            <div appHighlightText>Please add the background color red</div>


09- Renederer2 - To create the custom attribute directive to manipulate DOM


    1 create Directive and use Renderer. We can use renderer2 set style , value and manythings

            import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

            @Directive({
            selector: '[appRendererHiglight]',
            })
            export class RendererHiglightDirective implements OnInit {
            // we injected Renderer2 using constructor
            constructor(private element: ElementRef, private renderer: Renderer2) {}

            ngOnInit() {
                this.renderer.setStyle(
                this.element.nativeElement,
                'background-color',
                'green'
                );
              }
            }

             user.html
            <!-- Custom Directive Using Renderer -->
            <div appRendererHiglight>Please add the background using Renderer2</div>


10- HostListner --using through directive is also one way of communication

    Accessing the events using HostListner. and changing the element accordingly


        renderer-highlight.directive.ts

            import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

                @Directive({
                selector: '[appRendererHiglight]',
                })
                export class RendererHiglightDirective implements OnInit {
                
                constructor(private element: ElementRef, private renderer: Renderer2) {}


                // hostlister will listen to the events of the elements on which this directive is seating on
                @HostListener('mouseenter') onmouseover (event :Event){
                    // using HostListener to listen to the mouse event. and change the color accordingly
                    this.renderer.setStyle(
                    this.element.nativeElement,
                    'background-color',
                    'red'
                    );
                }

                // hostlister will listen to the events of the elements on which this directive is seating on
                @HostListener('mouseleave') onmouseleave (event :Event){
                // using HostListener to listen to the mouse event. and change the color accordingly
                this.renderer.setStyle(
                    this.element.nativeElement,
                    'background-color',
                    'yellow'
                );
                }

        users.html
            <div appRendererHiglight>Please add the background using Renderer2</div>

