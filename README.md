# AngularApp-AllTopicInOne

** Note

main - This branch has upto 3 topics

develop2 - This branch has topic post 3

develop3 - This branch has topic post 11

develop4 - This branch has topic from 15th 

develop5 - This branch has topic from 21

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


11 - Services

    it is kind of central repository. Instead of writing same code in multiple components, we can write in services and use it.

    dependency injection will inject depended classes


    Example 1 - service injection

        make sure to import service in provicers
    
        loggin.service.ts

         import { Injectable } from '@angular/core';
        @Injectable({
        providedIn: 'root'
        })
        export class LoggingService {
        constructor() { }

        functionFromLoggingService(){
        console.log("I am being called from Service file injected in user component")
        }
        }

        user.component.ts
         constructor(private loggingService: LoggingService) {
        }

        <!-- calling method from service -->
          onUserAdded(event){
            // calling method from services
            this.loggingService.functionFromLoggingService()
        }


12 - usingServiceAsData

    This we will start again from scratch

    Example 1

    step 1 create user service

        user.service.ts           --- created user list

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


    step 2 app.component.ts  & app.component.html

            app.component.ts         
            ---accessing data users which was define in service in app.component

            // users type of array and defining data type and keeping empty array.created user property array of name and status
            users: { name: string; status: string }[] = [];

            constructor(private userService: UserService) {}

            ngOnInit() {
                // getting user from service
                this.users = this.userService.users;
            }


            app.component.html
                <!-- accessing each user and sending the data to user component -->
                <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                    <app-user *ngFor="let user of users" [user]="user"></app-user>
                    </div>
                </div>
                </div>


        step 3 user.component.ts  & user.component.html

            user.compoenent.ts
              <!-- Getting data from parent component. i.e from app.component.ts -->
              @Input() user: { name: string; status: string };



            user.compoenent.html
                <!-- getting data from parent component i.e from app.compoent.ts and displaying it -->
                <div class="user-container">
                    <div class="users-container --Parent Component">
                        User Compoent
                        <div>
                            <span>
                                userName: {{ user.name }}
                            </span>
                            <span>
                                UserStatus: {{ user.status }}
                            </span>
                        </div>
                    </div>
                </div>


        Note : So in above three steps
                1 - Sending data from service to app component
                2 - sending data frin Parent component to Child component. i.e from app.component to user.component
                3 - accessing the data in user component. The data is coming from service


        *** We have to be careful while injecting the service.
            heirachical injection is very important. we can add service in individual component by adding provider or we can add at app level i.e app.module.ts
            
            Highest possible level we should inject
                1st level -app-module -> highest level -> same instances will be shared to all components and also services
                2nd level - app-Component -> Next Highest level -> same instances will be shared to all child components
                but services have different instance.
                3rd level- each one will be having different instances

    *Now we want to add user dynamically so for that
        we will create method in user.service
        then we will call it in add.user component
        also we will set active/incative flag from user component, by adding id 
        we will add id in app.component file


    step 4 - Now we want to add-user. For which we will create method in service and use it in add-user.

        user.service.ts
                // method to add user
                    addUser( name:string , status:string){
                        this.users.push({name,status});
                    }

        

        add-user.html
             <!-- we will creat form, we will use two-way binding and call service in add-user.html -->
                <div class="users-container">
                    <h2 class="border-wrap"> Child component</h2>
                    <div class="row">
                        <div class="col-md-12">
                        <div class="form-group">
                            <label for="">User Name</label>
                            <!-- [(ngModel)] --two way binding-->
                            <input type="text" class="form-control" [(ngModel)]="userName">
                        </div>
                        <div class="mt-3">
                            <button class="btn btn-primary" (click)="onAddUdser()">Add User</button>
                        </div>
                        </div>
                    </div>
                </div>

        add-user.ts
                export class AddUserComponent {
                userName : string;
                constructor(private userService:UserService) {}
                onAddUdser(){
                    this.userService.addUser(this.userName,'active')
                }
                }

    step 5 - Now we will create two buttons to set active & inactive and will handle it using id.

        app-component-html
            <!-- adding id 1st and binding with property so we can call in child component i.e user -->
                <app-user 
                    *ngFor="let user of users; let i =index" 
                    [user]="user"
                    [id]="i"
                ></app-user>

        user.service.ts
                // method to change userStatus by using id
                    updateStatus(id:number , status:string){
                        this.users[id].status = status;
                    }

        user-component.html
                <!-- we added two buttons where it will set active and inactive based on index -->
                <div>
                        <h5>userName: {{ user.name }}</h5>
                        <h5>UserStatus: {{ user.status }}</h5>
                        <span>
                            <button class="btn btn-sm btn-primary" (click)="onupdateStatus('active')">Set Active</button>
                            <button class="btn btn-sm btn-danger" (click)="onupdateStatus('in-active')">Set InActive</button>
                        </span>
                </div>


        user-component.ts

                export class UserComponent {
                    @Input() user: { name: string; status: string };
                    @Input() id: number;

                    constructor(private userService: UserService) {}

                    <!-- calling one more method from service -->
                    onupdateStatus(status: string) {
                        this.userService.updateStatus(this.id, status);
                    }
                    }

        Note:
            so we haven't use the event emitter and we used services to shared the data between the components.

13-InjectingServicesIntoAnotherServices

    Note - Whenever we are injecting services in another services. We have to use @injectable .
            For component - @Component injector
            For directive - @Directive injector
            but for services we do not have any decorator, so we have @Injectable decorator for service to inject
            dependancy services.

    
    Let's log if user is clicking on active and inactive in above flow to see an example

        logging-service.ts

                    logStatus(status:string){
                        console.log("Logging the status in the console and the status is " + status)
                    }


        user-service.ts
          //so on every successful addition or change in status. it will call loggin-service and show message in console

            addUser( name:string , status:string){
                this.users.push({name,status});
                // calling logStatus method from another service and will show status in console on adding of user
                this.loggingStatus.logStatus(status)
            }

        
            updateStatus(id:number , status:string){
                this.users[id].status = status;
                // calling logStatus method from another service and will show status whether is active or inactive
                this.loggingStatus.logStatus(status)
            }

14-Using-servicesForCrossComponent-Interaction 
    
    in this we will see how using service we do interaction between components


    Example
    user.service.ts
    <!-- we added eventEmitter for status update. we can emit event from service itself  -->
               statusUpdate = new EventEmitter<string>();
                // method to change userStatus by using id
                updateStatus(id:number , status:string){
                    this.users[id].status = status;
                    // using eventEmitter to emit status --added emit event
                    this.statusUpdate.emit(status)
                    // calling logStatus method from another service and will show status whether is active or inactive
                    this.loggingStatus.logStatus(status)
                }

    user.component.ts
                ngOnInit(){
                this.userService.statusUpdate.subscribe((data)=>{
                alert(data)
                })
            }


15-angularRouting-setup-loadRoutes

    Example of Routing -- Basic
        In this we are navigating with links . Page is getting refresh.

    app.component.html

                    <div class="container">
                        <div class="row">
                            <div class="col-md-3">
                            <ul class="nav flex-column">
                                <li class="nav-item"><a href="/">Home</a></li>
                                <li class="nav-item"><a href="/users">Users</a></li>
                                <li class="nav-item"><a href="/categories">Categories</a></li>
                            </ul>
                            </div>
                            <div class="col-md-9">
                            <div class="row">
                                <div class="col-md-12">
                                <router-outlet></router-outlet>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>


    Then define the routes. We define array of objects, object has path i.e url structure and define which component it will open.
    We have to make sure routermodule and Routes are imported
    aldo in @ngModule -- RoterModule.forRoot(appRoutes) --need to be done

                app.module.ts
                    import { BrowserModule } from '@angular/platform-browser';
                    import { RouterModule, Routes } from '@angular/router';

                    // definining array of Routes
                    const appRoutes:Routes= [
                    {path:'',component: HomeComponent},
                    {path:'users',component:UsersComponent},
                    {path:'categories',component:CategoriesComponent}
                    ]

                    @NgModule({
                    imports: [BrowserModule, FormsModule ,RouterModule.forRoot(appRoutes)],
                    })


16-Navigating links in the page using RouterLink

    I above we were using href, but that will refresh the page, we do not want to refresh whole page.
    
    RouterLink is a special directive in angular


    app.component.html
            <div class="container">
            <div class="row">
                <div class="col-md-3">
                <ul class="nav flex-column">
                    <li class="nav-item"><a routerLink="/" >Home</a></li>
                    <li class="nav-item"><a routerLink="/users">Users</a></li>
                    <li class="nav-item"><a routerLink="/categories">Categories</a></li>
                </ul>
                </div>
                <div class="col-md-9">
                <div class="row">
                    <div class="col-md-12">
                    <router-outlet></router-outlet>
                    </div>
                </div>
                </div>
            </div>
            </div>


17-navigating using Router programmatically in typescript code


            user.component.html
            <a routerLink="/categories"> Go To Categories</a> -->

            Note: above we are using routerLink - it wil navigate on click of the anchor. But we want to navigate
            after we are performing some logic or after succesful logic. i.e by using button then let see in below example


    we will see how we can navigate using programming.

    we will see in this example - when you submit form and then you want to navigate from one page to page


    Example --- navigating using typescript after successful performance of logic

        user.component.html

                    <button (click)="onCategoriesClick1()">Go To Categories using Router - navigateByUrl</button>
                    <button (click)="onCategoriesClick2()">Go To Categories using Router - navigate</button>

        user.component.ts

                    import { Router } from '@angular/router';

                     constructor(private router: Router) {}

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


18-Passing and Fetching Parameters to Routes using ActivatedRoute snapshot in Angular

    Getting dynamic data using url by activated Routing

    app.module.ts
        <!-- defining rounting of user with params-->
        const appRoutes:Routes= [
        {path:'',component: HomeComponent},
        {path:'users',component:UsersComponent},
        // dynamic route using id and prams
        {path:'users/:id/:name',component:UserComponent},
        {path:'categories',component:CategoriesComponent}
        ]

    user.component.ts
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


    user.component.html
    so now if you pass in url localhost:4200/
        <div>
            <div>User with id is  {{user.id}}</div>
            <div>User with id is  {{user.name}}</div>
        </div>
        <a [routerLink]="['/users',1,'badal']"> Get Details of badal </a>
    so now if you pass url 
    http://localhost:4200/users/1/badal


19-Passing query Parameters and Fragments to the URL Route

    queryParams -- ?page=1&search=badal
    framgment --- #load


    for example we want at the end of url we can use [queryParams] --?page=1&search=badal
    [queryParams] - it is an property which will take object key value

    user.component.html
        <a 
        [routerLink]="['/users',1,'badal']"
        [queryParams]="{ page:1,search:'badal'}"
        > Get Details of badal </a>
    output : http://localhost:4200/users/1/badal?page=1&search=badal

    Now we want to add Fragments in url.
    [fragment] -- we have property and it will only take string

    user.component.html
        <a 
        [routerLink]="['/users',1,'badal']"
        [queryParams]="{ page:1,search:'badal'}"
        [fragment]="'load'"
        > Get Details of badal </a>

        #load added
    output : http://localhost:4200/users/1/badal?page=1&search=badal#load  


    Example- now dynamically changing query params with params

    user.component.html
        <div>
            <button (click)="getDhavalDetails()">
                Get Dhaval Details
            </button>
        </div>

    user.component.ts
            getDhavalDetails(){
                this.router.navigate(['/users',2,'Dhaval'] ,
                {queryParams: {page:3,search:'Dhaval'}})
            }
            }

    output : http://localhost:4200/users/2/Dhaval?page=3&search=Dhaval
