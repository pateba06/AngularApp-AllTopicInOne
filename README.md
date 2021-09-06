# AngularApp-AllTopicInOne
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