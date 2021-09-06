View Encapsulation in Angular. Difference between Emulated, None, and Shadow Dom.


    @Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],

    <!-- you can use any of the below as per requirement -->
        encapsulation:ViewEncapsulation.None
        encapsulation:ViewEncapsulation.Emulated
        encapsulation:ViewEncapsulation.ShadowDom
    })

        encapsulation:ViewEncapsulation.None
            Unique identifier gets removed
            it will apply style in other component
            for example 
                if we parent component and inside we are wrapping to child component.
                if we apply h3 color blue , all the h3 in parent component and child component will have color blue.

                Note - but it is not good practice. if we want to apply to all components we should apply style style.css

        encapsulation:ViewEncapsulation.Emulated
            It is default angular behavior.


    update If you want styles that are added to Parent applied to Child you need to set ViewEncapsulation.None in the Child component so it doesn't prevent styles to bleed in.

    Emulated and Native are just two different ways to prevent styles to bleed in to and out from components. None is the only one that allows styles to cross component boundaries.

    original

    ViewEncapsulation.None is simple no encapsulation

    ViewEncapsulation.Emulated (currently the default in Angular2)
    adds attributes to component tags and child elements and manipulates the CSS (adding the attributes to the selectors) added to the page so the styles don't bleed into each other - to keep styles scoped to the components where they are added even though the styles are all added collected in the head of the page when components are loaded.

    ViewEncapsulation.Native creates custom elements with shadow DOM where the browsers native implementation ensures the style scoping.
    If the browser doesn't support shadow DOM natively, the web-components polyfills are required to shim the behavior. This is similar to ViewEncapsulation.Emulated but the polyfills are more expensive because they polyfill lots of browser APIs even when most of them are never used. Angulars Emulated emulation just adds the cost for what it uses and is therefore much more efficient for Angular applications.


    Native: Uses browser's native Shadow DOM. Check for browser support before enabling it.
    
    ShadowDom: Uses browser’s native Shadow DOM v1 for better cross-browser support and is a shared standard across the browsers. Check the difference between Shadow DOM v0 to v1.
 
    Emulated: Imitates behavior of Shadow DOM to scope the CSS for component and appends to the head.
   
    None: Neither Shadow DOM nor custom implementation, like global CSS which gets appended to the head


Hook method	Purpose	Timing

    ngOnChanges()	
        Respond when Angular sets or resets data-bound input properties. 
        The method receives a SimpleChanges object of current and previous property values.

        Note that this happens very frequently, so any operation you perform here impacts performance significantly. 
        See details in Using change detection hooks in this document.Called before ngOnInit() (if the component has bound inputs) 
        and whenever one or more data-bound input properties change.

        Note that if your component has no inputs or you use it without providing any inputs,
        the framework will not call ngOnChanges().

    ngOnInit()	
        Initialize the directive or component after Angular first displays the data-bound properties and sets the directive 
        or component's input properties.
        See details in   Initializing a component or directive in this document.

        Called once, after the first ngOnChanges(). 
        ngOnInit() is still called even when ngOnChanges() is not (which is the case when there are no template-bound inputs).

    ngDoCheck()	
        Detect and act upon changes that Angular can't or won't detect on its own. See details and example in Defining custom change detection in this document.

        Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.

    ngAfterContentInit()	
        Respond after Angular projects external content into the component's view, or into the view that a directive is in.

        See details and example in Responding to changes in content in this document.

        Called once after the first ngDoCheck().

        ngAfterContentChecked()	
        Respond after Angular checks the content projected into the directive or component.

        See details and example in Responding to projected content changes in this document.

        Called after ngAfterContentInit() and every subsequent ngDoCheck().

    ngAfterViewInit()	
        Respond after Angular initializes the component's views and child views, or the view that contains the directive.

        See details and example in Responding to view changes in this document.

        Called once after the first ngAfterContentChecked().

    ngAfterViewChecked()	
        Respond after Angular checks the component's views and child views, or the view that contains the directive.

        Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().

    ngOnDestroy()	
        Cleanup just before Angular destroys the directive or component.
        Unsubscribe Observables and detach event handlers to avoid memory leaks. 
        See details in Cleaning up on instance destruction in this document.
        Called immediately before Angular destroys the directive or component.
