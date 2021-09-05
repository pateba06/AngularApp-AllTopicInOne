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