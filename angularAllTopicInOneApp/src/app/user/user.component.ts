import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() userName: string;
  @Input() name: string;

  constructor() {
    console.log('Constructor Called' + '---Life Cycle Hook example');
  }

  ngOnInit() {
    // It initiates once the user component is initiated
    console.log('ngOnIt Invoked' + '-02---Life Cycle Hook example');
  }

  // if is the only lifecycle Hook which will take parameter
  // ngOnChanges it will execute whenever there is Input propery change
  ngOnChanges(element: SimpleChanges) {
    console.log('ngOnChanges invoked' + '-01---Life Cycle Hook example');
    console.log(element);
  }

  ngDoCheck() {
    console.log('ngDoCheck Invoked' + '-03---Life Cycle Hook example');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Invoked' + '-04---Life Cycle Hook example');
  }

  ngAfterContentChecked() {
    console.log(
      'ngAfterContentChecked Invoked' + '-05---Life Cycle Hook example'
    );
  }

  // after completeion of rendering of entire html ngAfterViewInit will be rendered
  ngAfterViewInit() {
    console.log('ngAfterViewInit Invoked' + '-06---Life Cycle Hook example');
  }

  // after entire page is rendered. if any change is there then ngAfterViewChecked will be invoked
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Invoked' + '-07---Life Cycle Hook example');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy Invoked' + '-07---Life Cycle Hook example');
  }
}
