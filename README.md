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

