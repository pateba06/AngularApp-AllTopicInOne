import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective implements OnInit {
  constructor(private element:ElementRef) {

  }

  ngOnInit(){
    // but below is not the best practice. It is better to use Renderer2 which is angular feature.
  (this.element.nativeElement as HTMLElement).style.backgroundColor = 'red';
  }
}
