import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2, HostListener, OnInit } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';

//using $ sign of jquery
//import * as $ from 'jquery';
//declare var $:any;
@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  viewName:string = "Chaman";

  //@viewChild
  @ViewChild('box', {static: false}) box:ElementRef;
  @ViewChild(Comp2Component, {static: false}) child:Comp2Component;

  changChildProperty(){
    this.child.viewName = "Mamta Tripathy";
  }

  callChildMethod(){
    this.child.clickMe();
  }
  
  constructor(private renderer:Renderer2){
    
  }

  ngAfterViewInit(){
    // console.log("ngAfterViewInit");
    // console.log(this.box);
    // this.box.nativeElement.style.backgroundColor="blue";
    // this.box.nativeElement.classList="boxred";
    // this.box.nativeElement.innerHTML="this is modified html";
    //console.log(this.child);

    //use better way Renderer
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor','green');
    this.renderer.setStyle(this.box.nativeElement, 'color','white');
    this.renderer.addClass(this.box.nativeElement, 'myClass');
    this.renderer.setAttribute(this.box.nativeElement, 'title','this is test title');
  }

 @HostListener('click') myClick(){
    alert('clicked');
  }

  @HostListener('window:scroll',['$event']) myScroll(){
    console.log('Scrolling');
  }
  ngOnInit(){
    // $(window).scroll(function(){
    //   console.log('scrolling')
    // })
    var num = 1;
    num = num + 1;
    console.log("Window Scrolling:"+num);
  }
 
  
  

}
