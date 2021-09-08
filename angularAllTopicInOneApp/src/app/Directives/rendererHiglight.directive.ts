import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHiglight]',
})
export class RendererHiglightDirective implements OnInit {
  // we injected Renderer2 using constructor
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // // this one was set for showing the renderer example
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'background-color',
    //   'green'
    // );
  }

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
}
