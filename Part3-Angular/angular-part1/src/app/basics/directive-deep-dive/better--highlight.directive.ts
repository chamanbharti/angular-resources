import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
 // @Input() highlightColor = 'blue';
  @Input('appBetterHighlight') highlightColor = 'blue';
 @HostBinding('style.backgroundColor') backgroundColor: string; // 'transparent';
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) { }
  ngOnInit() {
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
 this.backgroundColor = this.defaultColor;
 }
  @HostListener('mouseenter') mouseover(eventData: Event) {
   // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor; // 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
   // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = 'red';
  }
}
