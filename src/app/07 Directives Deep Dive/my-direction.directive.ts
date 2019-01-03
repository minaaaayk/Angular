import {Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appMyDirection]'
})
export class MyDirectionDirective implements OnInit {
  @Input() defaultColor: string;
  @Input('appMyDirection') hoverColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') mouseOver(eventData: Event) {
    // this.backgroundColor = this.hoverColor;
    console.log(this.defaultColor);
    console.log(this.hoverColor);
     this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.hoverColor);
  }
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.backgroundColor = this.defaultColor;
     this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.defaultColor);
  }
  ngOnInit() {
   // this.backgroundColor = this.defaultColor;
  }
}
