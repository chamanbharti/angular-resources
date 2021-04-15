import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() {}
@HostBinding('class.active') className;
 @HostListener('click') myClick() {
    this.className = !this.className;
  }

  @HostListener('mouseover') MouseOver(){
    // this.renderer.setStyle(this.element.nativeElement,'backgroundColor','lightgray');
  }
  @HostListener('mouseout') MouseOut(){
    // this.renderer.setStyle(this.element.nativeElement,'backgroundColor','white');
  }
}
