import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';
import { CLASS_NAME } from 'ngx-bootstrap/modal/modal-options.class';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { 
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','yellow');
  }



  changeBG(color:string){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',color);
  }

//  @HostBinding('style.backgroundColor') bgColor;
@HostBinding('style.backgroundColor') bgColor = "green";//default color
@HostBinding('class.myClass') className; 
@HostBinding('attr.title') myTitle; 
 @HostListener('click') myClick(){
    //alert("Clicked") className; 
    // this.renderer.setStyle(this.element.nativeElement,'backgroundColor','blue');
    this.bgColor = 'blue';
    this.className = true;
    this.myTitle = 'this is test title';
  }

  @HostListener('mouseover') MouseOver(){
    // this.renderer.setStyle(this.element.nativeElement,'backgroundColor','lightgray');
  }
  @HostListener('mouseout') MouseOut(){
    // this.renderer.setStyle(this.element.nativeElement,'backgroundColor','white');
  }
}
