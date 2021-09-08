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

    Angular life cycle hooks
    
    
    constructor:: This is invoked when Angular creates a component or directive by calling `new` on the class.

    ngOnChanges:: Invoked *every* time there is a change in one of th _input_ properties of the component.

    ngOnInit::
    Invoked when given component has been initialized. +
    This hook is only called *once* after the first `ngOnChanges`

    ngDoCheck::
    Invoked when the change detector of the given component is invoked.
    It allows us to implement our own change detection algorithm for the given component. +
    +
    IMPORTANT: `ngDoCheck` and `ngOnChanges` should not be implemented together on the same component.
    +
    NOTE: We will cover this hook in more detail in the _Advanced Components_ section at the end of this course.

    ngOnDestroy::
    This method will be invoked just before Angular destroys the component. +
    Use this hook to unsubscribe observables and detach event handlers to avoid memory leaks.

    === Hooks for the Component's Children

    These hooks are only called for components and not directives.

    NOTE: We will cover the difference between Components and Directives in the next section.

    ngAfterContentInit::
    Invoked _after_ Angular performs any content projection into the component's view (see the previous lecture on _Content Projection_ for more info). +

    ngAfterContentChecked:: Invoked each time the content of the given component has been checked by the change detection mechanism of Angular.

    ngAfterViewInit:: Invoked when the component's view has been fully initialized.

    ngAfterViewChecked:: Invoked each time the view of the given component has been checked by the change detection mechanism of Angular.
